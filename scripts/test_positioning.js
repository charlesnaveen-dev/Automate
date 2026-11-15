import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:5173';

const TEST_CONFIGS = [
  { id: 'ai-agents', path: '/capabilities/ai-agents', sel: '.agent-hero-bg', posDesktop: '75% 25%', posTablet: '74% 20%', posMobile: '76% 15%' },
  { id: 'workflow-automation', path: '/capabilities/workflow-automation', sel: '.wf-hero-bg', posDesktop: '85% 40%', posTablet: '82% 35%', posMobile: '84% 30%' },
  { id: 'voice-ai', path: '/capabilities/voice-ai', sel: '.voice-hero-bg', posDesktop: '80% 25%', posTablet: '78% 20%', posMobile: '80% 15%' },
  { id: 'custom-ai', path: '/capabilities/custom-ai-solutions', sel: '.custom-hero-bg', posDesktop: '82% 35%', posTablet: '80% 30%', posMobile: '82% 25%' },
];

const OUT_DIR = path.resolve('debug_screenshots/hero_audit/tuning');
fs.mkdirSync(OUT_DIR, { recursive: true });

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();

  for (const item of TEST_CONFIGS) {
    // 1. Tablet 768
    await page.setViewport({ width: 768, height: 1024 });
    await page.goto(BASE_URL + item.path, { waitUntil: 'networkidle2', timeout: 15000 });
    await page.evaluate((sel, pos) => {
      const el = document.querySelector(sel);
      if (el) el.style.objectPosition = pos;
    }, item.sel, item.posTablet);
    await new Promise(r => setTimeout(r, 400));
    let hero = await page.$('section[class*="hero"]');
    await hero.screenshot({ path: path.join(OUT_DIR, `${item.id}_768_test.png`) });

    // 2. Mobile 390
    await page.setViewport({ width: 390, height: 844 });
    await page.goto(BASE_URL + item.path, { waitUntil: 'networkidle2', timeout: 15000 });
    await page.evaluate((sel, pos) => {
      const el = document.querySelector(sel);
      if (el) el.style.objectPosition = pos;
    }, item.sel, item.posMobile);
    await new Promise(r => setTimeout(r, 400));
    hero = await page.$('section[class*="hero"]');
    await hero.screenshot({ path: path.join(OUT_DIR, `${item.id}_390_test.png`) });
  }

  await browser.close();
  console.log('Finished tuning screenshots.');
}

run().catch(console.error);
