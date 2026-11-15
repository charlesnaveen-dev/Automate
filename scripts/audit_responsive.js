import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:5173';

const VIEWPORTS = [
  { name: 'mobile-360', width: 360, height: 740 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'mobile-430', width: 430, height: 932 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'tablet-1024', width: 1024, height: 768 },
];

const ROUTES = [
  '/',
  '/capabilities',
  '/capabilities/ai-agents',
  '/capabilities/workflow-automation',
  '/industries',
  '/industries/legal',
  '/process',
  '/about',
  '/contact',
];

const SCREENSHOT_DIR = path.resolve('debug_screenshots');
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function runAudit() {
  console.log('Launching Chrome for responsive audit...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();
  const results = [];

  for (const vp of VIEWPORTS) {
    console.log(`\n========================================`);
    console.log(`Testing Viewport: ${vp.name} (${vp.width}x${vp.height})`);
    console.log(`========================================`);
    await page.setViewport({ width: vp.width, height: vp.height });

    for (const route of ROUTES) {
      const url = `${BASE_URL}${route}`;
      try {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });
        await new Promise((r) => setTimeout(r, 600));

        // 1. Check Horizontal Overflow
        const overflowData = await page.evaluate((vpWidth) => {
          const docEl = document.documentElement;
          const body = document.body;
          const scrollWidth = Math.max(docEl.scrollWidth, body.scrollWidth);
          const innerWidth = window.innerWidth;
          const hasOverflow = scrollWidth > innerWidth + 1;

          let offendingElements = [];
          if (hasOverflow) {
            const allElements = document.querySelectorAll('*');
            for (const el of allElements) {
              const rect = el.getBoundingClientRect();
              if (rect.right > innerWidth + 1.5) {
                const className = (typeof el.className === 'string') ? el.className : (el.className?.baseVal || '');
                offendingElements.push({
                  tag: el.tagName.toLowerCase(),
                  class: className.slice(0, 80),
                  id: el.id || '',
                  right: Math.round(rect.right),
                  width: Math.round(rect.width),
                  overflowBy: Math.round(rect.right - innerWidth),
                });
              }
            }
          }

          // Check typography font-family
          const h1 = document.querySelector('h1');
          const h2 = document.querySelector('h2');
          const p = document.querySelector('p');
          const btn = document.querySelector('.btn');

          return {
            hasOverflow,
            scrollWidth,
            innerWidth,
            overflowDiff: scrollWidth - innerWidth,
            offendingElements: offendingElements.slice(0, 8),
            fonts: {
              h1: h1 ? window.getComputedStyle(h1).fontFamily : null,
              h2: h2 ? window.getComputedStyle(h2).fontFamily : null,
              p: p ? window.getComputedStyle(p).fontFamily : null,
              btn: btn ? window.getComputedStyle(btn).fontFamily : null,
            },
          };
        }, vp.width);

        const routeSlug = route === '/' ? 'home' : route.replace(/\//g, '_').slice(1);
        const screenshotPath = path.join(SCREENSHOT_DIR, `${vp.name}_${routeSlug}.png`);
        
        // Save screenshot on 390 and 768
        if (vp.name === 'mobile-390' || vp.name === 'tablet-768') {
          await page.screenshot({ path: screenshotPath, fullPage: false });
        }

        console.log(`[${vp.name}] ${route} -> Overflow: ${overflowData.hasOverflow ? `YES (+${overflowData.overflowDiff}px)` : 'NO'}`);
        if (overflowData.hasOverflow) {
          console.log('   Offenders:', JSON.stringify(overflowData.offendingElements));
        }

        results.push({
          viewport: vp.name,
          route,
          ...overflowData,
        });
      } catch (err) {
        console.error(`Error on ${vp.name} ${route}:`, err.message);
      }
    }

    // On mobile-390, test opening the mobile navigation menu
    if (vp.name === 'mobile-390') {
      try {
        await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle2' });
        await new Promise((r) => setTimeout(r, 400));
        const toggleBtn = await page.$('.mobile-menu-toggle');
        if (toggleBtn) {
          await toggleBtn.click();
          await new Promise((r) => setTimeout(r, 500));
          const isDrawerOpen = await page.evaluate(() => {
            const panel = document.querySelector('.mobile-nav-panel');
            return panel ? panel.classList.contains('is-open') : false;
          });
          console.log(`\n[Mobile Menu Test] Toggle clicked -> Drawer is-open: ${isDrawerOpen}`);
          await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'mobile_menu_open.png') });

          // Test capabilities subpage accordion
          const accordionBtn = await page.$('.mobile-accordion-btn');
          if (accordionBtn) {
            await accordionBtn.click();
            await new Promise((r) => setTimeout(r, 400));
            console.log(`[Mobile Menu Test] Accordion clicked -> captured menu state.`);
            await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'mobile_menu_accordion.png') });
          }
        } else {
          console.log('\n[Mobile Menu Test] Toggle button NOT found!');
        }
      } catch (err) {
        console.error('Error during mobile menu test:', err.message);
      }
    }
  }

  await browser.close();
  console.log('\nAudit complete! Writing audit_results.json...');
  fs.writeFileSync('audit_results.json', JSON.stringify(results, null, 2));
}

runAudit().catch(console.error);
