import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('debug_screenshots/final_audit');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function capture() {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // 1. Privacy Policy
  await page.goto('http://localhost:5173/privacy', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(outDir, 'privacy_desktop.png'), fullPage: false });

  // 2. Terms of Service
  await page.goto('http://localhost:5173/terms', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(outDir, 'terms_desktop.png'), fullPage: false });

  // 3. Contact Us
  await page.goto('http://localhost:5173/contact', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(outDir, 'contact_desktop.png'), fullPage: false });

  // 4. Discuss Your Project
  await page.goto('http://localhost:5173/start-project', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(outDir, 'start_project_desktop.png'), fullPage: false });

  // 5. Home page footer transition
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, 'home_footer_desktop.png'), fullPage: false });

  // 6. Real Estate footer transition
  await page.goto('http://localhost:5173/industries/real-estate', { waitUntil: 'networkidle0' });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, 'real_estate_footer_desktop.png'), fullPage: false });

  // 7. Mobile Contact
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:5173/contact', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(outDir, 'contact_mobile.png'), fullPage: false });

  // 8. Mobile Start Project
  await page.goto('http://localhost:5173/start-project', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(outDir, 'start_project_mobile.png'), fullPage: false });

  await browser.close();
  console.log('Captures complete in debug_screenshots/final_audit');
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
