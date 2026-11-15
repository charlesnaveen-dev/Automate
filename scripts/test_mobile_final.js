import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:5173';

const PAGES = [
  {
    id: 'ai-agents',
    path: '/capabilities/ai-agents',
    sel: '.agent-hero-bg',
    overlaySel: '.agent-hero-overlay',
    secSel: '.agent-hero-section',
    contentSel: '.agent-hero-content',
    pos: '82% 10%'
  },
  {
    id: 'workflow-automation',
    path: '/capabilities/workflow-automation',
    sel: '.wf-hero-bg',
    overlaySel: '.wf-hero-overlay',
    secSel: '.wf-hero-section',
    contentSel: '.wf-hero-content',
    pos: '88% 18%'
  },
  {
    id: 'voice-ai',
    path: '/capabilities/voice-ai',
    sel: '.voice-hero-bg',
    overlaySel: '.voice-hero-overlay',
    secSel: '.voice-hero-section',
    contentSel: '.voice-hero-content',
    pos: '84% 8%'
  },
  {
    id: 'custom-ai',
    path: '/capabilities/custom-ai-solutions',
    sel: '.custom-hero-bg',
    overlaySel: '.custom-hero-overlay',
    secSel: '.custom-hero-section',
    contentSel: '.custom-hero-content',
    pos: '86% 15%'
  },
];

const OUT_DIR = path.resolve('debug_screenshots/hero_audit/mobile_final_test');
fs.mkdirSync(OUT_DIR, { recursive: true });

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });

  for (const item of PAGES) {
    await page.goto(BASE_URL + item.path, { waitUntil: 'networkidle2', timeout: 15000 });
    await page.evaluate((item) => {
      const img = document.querySelector(item.sel);
      if (img) img.style.objectPosition = item.pos;
      const overlay = document.querySelector(item.overlaySel);
      if (overlay) {
        overlay.style.background = 'linear-gradient(180deg, rgba(7, 25, 35, 0.45) 0%, rgba(7, 25, 35, 0.72) 30%, rgba(7, 25, 35, 0.92) 58%, rgba(11, 32, 41, 0.98) 100%)';
      }
    }, item);

    await new Promise(r => setTimeout(r, 400));
    const hero = await page.$('section[class*="hero"]');
    const filename = path.join(OUT_DIR, `${item.id}_390.png`);
    await hero.screenshot({ path: filename });
    console.log('Saved', filename);
  }

  await browser.close();
}

run().catch(console.error);
