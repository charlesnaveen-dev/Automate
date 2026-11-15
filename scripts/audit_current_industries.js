import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:5173';

const INDUSTRIES = [
  'legal',
  'real-estate',
  'healthcare',
  'home-services',
  'financial-services',
  'insurance',
  'construction',
  'property-management',
  'professional-services',
  'automotive',
  'it-services',
  'ecommerce-logistics'
];

const OUT_DIR = path.resolve('debug_screenshots/industry_audit_before');
fs.mkdirSync(OUT_DIR, { recursive: true });

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // 1. Capture Industries overview grid
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/industries`, { waitUntil: 'networkidle2' });
  await page.screenshot({ path: path.join(OUT_DIR, 'industries_grid_1440.png'), fullPage: false });

  // 2. Capture each industry detail hero at 1440 and 390
  for (const ind of INDUSTRIES) {
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`${BASE_URL}/industries/${ind}`, { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 400));
    const hero = await page.$('.ind-detail-hero-section');
    if (hero) {
      await hero.screenshot({ path: path.join(OUT_DIR, `${ind}_hero_1440.png`) });
    }

    await page.setViewport({ width: 390, height: 844 });
    await page.goto(`${BASE_URL}/industries/${ind}`, { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 400));
    const heroMob = await page.$('.ind-detail-hero-section');
    if (heroMob) {
      await heroMob.screenshot({ path: path.join(OUT_DIR, `${ind}_hero_390.png`) });
    }

    console.log(`Audited ${ind}`);
  }

  await browser.close();
  console.log('All industry captures finished');
}

run().catch(console.error);
