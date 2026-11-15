import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:5173';

const BREAKPOINTS = [
  { name: '1440', width: 1440, height: 900 },
  { name: '1280', width: 1280, height: 800 },
  { name: '768', width: 768, height: 1024 },
  { name: '390', width: 390, height: 844 },
];

const OUT_DIR = path.resolve('debug_screenshots/industries_hero_audit');
fs.mkdirSync(OUT_DIR, { recursive: true });

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  for (const bp of BREAKPOINTS) {
    await page.setViewport({ width: bp.width, height: bp.height });
    await page.goto(BASE_URL + '/industries', { waitUntil: 'networkidle2', timeout: 15000 });
    await new Promise(r => setTimeout(r, 600));

    // Screenshot default state
    const hero = await page.$('.ind-editorial-hero-section');
    if (hero) {
      await hero.screenshot({ path: path.join(OUT_DIR, `industries_hero_${bp.name}_default.png`) });
    }

    // If desktop or tablet, hover over real-estate node
    if (bp.width >= 768) {
      const node = await page.$('.ind-eco-node-real-estate');
      if (node) {
        await node.hover();
        await new Promise(r => setTimeout(r, 300));
        await hero.screenshot({ path: path.join(OUT_DIR, `industries_hero_${bp.name}_hover.png`) });
      }
    } else {
      // On mobile, click the healthcare node
      const node = await page.$('.ind-eco-node-healthcare');
      if (node) {
        await node.click();
        await new Promise(r => setTimeout(r, 300));
        await hero.screenshot({ path: path.join(OUT_DIR, `industries_hero_${bp.name}_tap.png`) });
      }
    }

    console.log(`Saved screenshots for ${bp.name}`);
  }

  await browser.close();
}

run().catch(console.error);
