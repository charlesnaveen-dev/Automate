import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUT_DIR = 'debug_screenshots/section3_audit';
fs.mkdirSync(OUT_DIR, { recursive: true });

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  // Homepage Capabilities Mobile 390
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 600));
  const elCap = await page.$('.cap-showcase-section');
  if (elCap) {
    await elCap.screenshot({ path: path.join(OUT_DIR, 'home_capabilities_390.png') });
  }

  // Also capture Homepage Hero with integration strip at 390
  const elHero = await page.$('.hero-cinematic');
  if (elHero) {
    await elHero.screenshot({ path: path.join(OUT_DIR, 'home_hero_390.png') });
  }

  await browser.close();
  console.log('Successfully captured Homepage mobile screenshots!');
}

run().catch(console.error);
