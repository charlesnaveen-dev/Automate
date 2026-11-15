import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:5173';

const PAGES = ['legal', 'real-estate', 'healthcare', 'home-services'];
const OUT_DIR = path.resolve('debug_screenshots/industry_redesign_audit');
fs.mkdirSync(OUT_DIR, { recursive: true });

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  for (const slug of PAGES) {
    // Desktop 1440
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`${BASE_URL}/industries/${slug}`, { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 400));

    // Capture Section 02: Challenge
    const s1 = await page.$('.ind-detail-challenge-section');
    if (s1) {
      await s1.screenshot({ path: path.join(OUT_DIR, `${slug}_s1_challenge_1440.png`) });
    }

    // Capture Section 03: Deliver
    const s2 = await page.$('.ind-detail-deliver-section');
    if (s2) {
      await s2.screenshot({ path: path.join(OUT_DIR, `${slug}_s2_deliver_1440.png`) });
    }

    // Capture Section 04: Business Value
    const s3 = await page.$('.ind-detail-value-section');
    if (s3) {
      await s3.screenshot({ path: path.join(OUT_DIR, `${slug}_s3_value_1440.png`) });
    }

    // Mobile 390
    await page.setViewport({ width: 390, height: 844 });
    await page.goto(`${BASE_URL}/industries/${slug}`, { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 400));

    const s1_m = await page.$('.ind-detail-challenge-section');
    if (s1_m) {
      await s1_m.screenshot({ path: path.join(OUT_DIR, `${slug}_s1_challenge_390.png`) });
    }
    const s2_m = await page.$('.ind-detail-deliver-section');
    if (s2_m) {
      await s2_m.screenshot({ path: path.join(OUT_DIR, `${slug}_s2_deliver_390.png`) });
    }
    const s3_m = await page.$('.ind-detail-value-section');
    if (s3_m) {
      await s3_m.screenshot({ path: path.join(OUT_DIR, `${slug}_s3_value_390.png`) });
    }

    console.log(`Verified ${slug}`);
  }

  await browser.close();
  console.log('All redesign verification captures complete');
}

run().catch(console.error);
