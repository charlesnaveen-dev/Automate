import puppeteer from 'puppeteer-core';
import fs from 'fs';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:5173';

const VIEWPORTS = [
  { name: 'mobile-320', width: 320, height: 600 },
  { name: 'mobile-360', width: 360, height: 740 },
  { name: 'mobile-375', width: 375, height: 667 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'mobile-414', width: 414, height: 896 },
  { name: 'mobile-430', width: 430, height: 932 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'tablet-1024', width: 1024, height: 768 },
  { name: 'desktop-1440', width: 1440, height: 900 }
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
  '/terms'
];

async function scan() {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: CHROME_PATH,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const issues = [];

  for (const vp of VIEWPORTS) {
    await page.setViewport({ width: vp.width, height: vp.height });
    console.log(`Checking viewport: ${vp.name} (${vp.width}x${vp.height})...`);

    for (const route of ROUTES) {
      try {
        await page.goto(`${BASE_URL}${route}`, { waitUntil: 'domcontentloaded', timeout: 10000 });
        await new Promise(r => setTimeout(r, 200));

        const overflowData = await page.evaluate((vpWidth) => {
          const docScroll = document.documentElement.scrollWidth;
          const bodyScroll = document.body.scrollWidth;
          const isOver = docScroll > vpWidth || bodyScroll > vpWidth;

          let offending = [];
          if (isOver) {
            const allElements = document.querySelectorAll('*');
            for (const el of allElements) {
              const rect = el.getBoundingClientRect();
              if (rect.right > vpWidth + 1.5) {
                offending.push({
                  tag: el.tagName,
                  className: el.className ? String(el.className).substring(0, 80) : '',
                  id: el.id,
                  right: Math.round(rect.right),
                  width: Math.round(rect.width)
                });
              }
            }
          }
          return {
            docScroll,
            bodyScroll,
            isOver,
            offendingCount: offending.length,
            offending: offending.slice(0, 8)
          };
        }, vp.width);

        if (overflowData.isOver) {
          issues.push({
            viewport: vp.name,
            width: vp.width,
            route,
            docScroll: overflowData.docScroll,
            offending: overflowData.offending
          });
        }
      } catch (err) {
        console.error(`Error loading ${route} at ${vp.width}px:`, err.message);
      }
    }
  }

  await browser.close();

  fs.writeFileSync('scripts/overflow_issues.json', JSON.stringify(issues, null, 2));
  console.log(`Scan complete! Total overflow instances: ${issues.length}`);
  console.log(`Unique routes with issues: ${[...new Set(issues.map(i => i.route))].join(', ')}`);
}

scan().catch(console.error);
