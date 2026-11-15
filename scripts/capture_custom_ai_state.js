import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:5173';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  // Desktop 1440
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/capabilities/custom-ai-solutions`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'debug_screenshots/custom_ai_desktop_before.png', fullPage: false });

  // Section 2 desktop
  const sec2 = await page.$('.custom-challenge-section');
  if (sec2) {
    await sec2.screenshot({ path: 'debug_screenshots/custom_ai_section2_desktop_before.png' });
  }

  // Tablet 768
  await page.setViewport({ width: 768, height: 1024 });
  await page.reload({ waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'debug_screenshots/custom_ai_tablet_before.png', fullPage: false });

  // Mobile 390
  await page.setViewport({ width: 390, height: 844 });
  await page.reload({ waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'debug_screenshots/custom_ai_mobile_before.png', fullPage: false });

  const sec2Mob = await page.$('.custom-challenge-section');
  if (sec2Mob) {
    await sec2Mob.screenshot({ path: 'debug_screenshots/custom_ai_section2_mobile_before.png' });
  }

  await browser.close();
  console.log('Captured before screenshots.');
})().catch(err => {
  console.error(err);
  process.exit(1);
});
