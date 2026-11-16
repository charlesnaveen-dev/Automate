import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:5173';

const PAGES = [
  { id: 'ai-agents', path: '/capabilities/ai-agents', sec2: '.agent-challenge-section' },
  { id: 'voice-ai', path: '/capabilities/voice-ai', sec2: '.voice-challenge-section' },
  { id: 'workflow-automation', path: '/capabilities/workflow-automation', sec2: '.wf-challenge-section' },
  { id: 'custom-ai', path: '/capabilities/custom-ai-solutions', sec2: '.custom-challenge-section' }
];

const OUT_DIR = path.resolve('debug_screenshots/all_capabilities_refined');
fs.mkdirSync(OUT_DIR, { recursive: true });

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const p of PAGES) {
    console.log(`Testing ${p.id}...`);
    const page = await browser.newPage();

    // 1. Desktop 1440
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`${BASE_URL}${p.path}`, { waitUntil: 'networkidle2' });
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: path.join(OUT_DIR, `${p.id}_desktop_hero.png`), fullPage: false });

    const sec2 = await page.$(p.sec2);
    if (sec2) {
      await sec2.screenshot({ path: path.join(OUT_DIR, `${p.id}_desktop_section2.png`) });
    }

    // 2. Tablet 768
    await page.setViewport({ width: 768, height: 1024 });
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: path.join(OUT_DIR, `${p.id}_tablet_768.png`), fullPage: false });

    // 3. Mobile 390
    await page.setViewport({ width: 390, height: 844 });
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: path.join(OUT_DIR, `${p.id}_mobile_390_hero.png`), fullPage: false });

    const sec2Mob = await page.$(p.sec2);
    if (sec2Mob) {
      await sec2Mob.screenshot({ path: path.join(OUT_DIR, `${p.id}_mobile_390_section2.png`) });
    }

    await page.close();
  }

  await browser.close();
  console.log('All capability screenshots captured.');
})().catch(err => {
  console.error(err);
  process.exit(1);
});
