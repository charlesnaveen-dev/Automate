import puppeteer from 'puppeteer-core';

async function test() {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });
  const page = await browser.newPage();
  
  for (const width of [390, 768, 1440]) {
    await page.setViewport({ width, height: 900 });
    await page.goto('http://localhost:5173/process', { waitUntil: 'networkidle0' });
    await page.screenshot({ path: 'debug_screenshots/final_audit/process_page_' + width + '.png', fullPage: false });
  }
  await browser.close();
}
test().catch(console.error);
