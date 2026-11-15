import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:5173';

const VIEWPORTS = [
  { width: 320, height: 640, label: '320px' },
  { width: 375, height: 667, label: '375px' },
  { width: 390, height: 844, label: '390px' },
  { width: 430, height: 932, label: '430px' },
];

const ROUTES = [
  '/',
  '/capabilities',
  '/capabilities/ai-agents',
  '/capabilities/workflow-automation',
  '/capabilities/voice-ai',
  '/capabilities/custom-ai-solutions',
  '/industries',
  '/industries/legal',
  '/industries/real-estate',
  '/industries/healthcare',
  '/industries/home-services',
  '/industries/financial-services',
  '/industries/insurance',
  '/industries/construction',
  '/industries/property-management',
  '/industries/professional-services',
  '/industries/automotive',
  '/industries/it-services',
  '/industries/ecommerce-logistics',
  '/process',
  '/about',
  '/blueprints',
  '/integrations',
  '/engagement',
  '/security',
  '/faq',
  '/contact',
  '/start-project',
  '/privacy',
  '/terms',
  '/404'
];

async function captureAll() {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: CHROME_PATH,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const summary = [];

  for (const vp of VIEWPORTS) {
    const dir = path.resolve(`debug_screenshots/mobile_verification/${vp.label}`);
    fs.mkdirSync(dir, { recursive: true });
    await page.setViewport({ width: vp.width, height: vp.height });

    for (const route of ROUTES) {
      const slug = route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '_');
      const screenshotPath = path.join(dir, `${slug}.png`);

      try {
        await page.goto(`${BASE_URL}${route}`, { waitUntil: 'domcontentloaded', timeout: 10000 });
        await new Promise(r => setTimeout(r, 100));

        // Check if layout broke or overflowed
        const layoutHealth = await page.evaluate((w) => {
          const docW = document.documentElement.scrollWidth;
          const bodyW = document.body.scrollWidth;
          const isOverflow = docW > w || bodyW > w;
          const title = document.title;
          const h1 = document.querySelector('h1')?.innerText || '';
          return {
            isOverflow,
            scrollW: Math.max(docW, bodyW),
            title,
            h1Length: h1.length
          };
        }, vp.width);

        await page.screenshot({ path: screenshotPath, fullPage: false });

        summary.push({
          viewport: vp.label,
          route,
          status: layoutHealth.isOverflow ? 'OVERFLOW' : 'OK',
          scrollW: layoutHealth.scrollW
        });
      } catch (err) {
        summary.push({
          viewport: vp.label,
          route,
          status: 'ERROR',
          error: err.message
        });
      }
    }
    console.log(`Finished viewport ${vp.label}`);
  }

  await browser.close();

  const total = summary.length;
  const overflows = summary.filter(s => s.status === 'OVERFLOW').length;
  const errors = summary.filter(s => s.status === 'ERROR').length;
  const ok = summary.filter(s => s.status === 'OK').length;

  console.log(`\n=== Mobile Verification Complete ===`);
  console.log(`Total snapshots: ${total}`);
  console.log(`Passed (OK): ${ok}`);
  console.log(`Overflows: ${overflows}`);
  console.log(`Errors: ${errors}`);

  fs.writeFileSync('scripts/mobile_verification_summary.json', JSON.stringify(summary, null, 2));
}

captureAll().catch(console.error);
