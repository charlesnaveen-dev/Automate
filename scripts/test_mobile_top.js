import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:5173';

const TESTS = [
  { id: 'ai-agents', path: '/capabilities/ai-agents', sel: '.agent-hero-bg', secSel: '.agent-hero-section', overlaySel: '.agent-hero-overlay', pos: '80% 0%' },
  { id: 'workflow-automation', path: '/capabilities/workflow-automation', sel: '.wf-hero-bg', secSel: '.wf-hero-section', overlaySel: '.wf-hero-overlay', pos: '85% 0%' },
  { id: 'voice-ai', path: '/capabilities/voice-ai', sel: '.voice-hero-bg', secSel: '.voice-hero-section', overlaySel: '.voice-hero-overlay', pos: '82% 0%' },
  { id: 'custom-ai', path: '/capabilities/custom-ai-solutions', sel: '.custom-hero-bg', secSel: '.custom-hero-section', overlaySel: '.custom-hero-overlay', pos: '85% 0%' },
];

const OUT_DIR = path.resolve('debug_screenshots/hero_audit/mobile_top_test');
fs.mkdirSync(OUT_DIR, { recursive: true });

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });

  for (const item of TESTS) {
    await page.goto(BASE_URL + item.path, { waitUntil: 'networkidle2', timeout: 15000 });
    await page.evaluate((item) => {
      const sec = document.querySelector(item.secSel);
      if (sec) {
        sec.style.alignItems = 'flex-end';
        sec.style.padding = '220px 0 40px 0';
        sec.style.minHeight = '100svh';
      }
      const img = document.querySelector(item.sel);
      if (img) img.style.objectPosition = item.pos;
      const overlay = document.querySelector(item.overlaySel);
      if (overlay) {
        overlay.style.background = 'linear-gradient(180deg, rgba(7,25,35,0.15) 0%, rgba(7,25,35,0.4) 180px, rgba(7,25,35,0.85) 300px, rgba(11,32,41,0.98) 100%)';
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
