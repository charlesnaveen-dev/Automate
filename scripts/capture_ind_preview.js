import puppeteer from 'puppeteer-core';

async function test() {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  const section = await page.$('.industries-preview-section');
  if (section) {
    await section.screenshot({ path: 'debug_screenshots/final_audit/ind_preview_390.png' });
  }
  await browser.close();
}
test().catch(console.error);
