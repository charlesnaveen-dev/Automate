import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:5173';

const PAGES = [
  { id: 'ai-agents', path: '/capabilities/ai-agents', sel: '.agent-hero-bg', contentSel: '.agent-hero-content', overlaySel: '.agent-hero-overlay', pos: '80% 25%' },
  { id: 'workflow-automation', path: '/capabilities/workflow-automation', sel: '.wf-hero-bg', contentSel: '.wf-hero-content', overlaySel: '.wf-hero-overlay', pos: '86% 35%' },
  { id: 'voice-ai', path: '/capabilities/voice-ai', sel: '.voice-hero-bg', contentSel: '.voice-hero-content', overlaySel: '.voice-hero-overlay', pos: '84% 20%' },
  { id: 'custom-ai', path: '/capabilities/custom-ai-solutions', sel: '.custom-hero-bg', contentSel: '.custom-hero-content', overlaySel: '.custom-hero-overlay', pos: '86% 30%' },
];

const OUT_DIR = path.resolve('debug_screenshots/hero_audit/tablet_test');
fs.mkdirSync(OUT_DIR, { recursive: true });

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 768, height: 1024 });

  for (const item of PAGES) {
    await page.goto(BASE_URL + item.path, { waitUntil: 'networkidle2', timeout: 15000 });
    await page.evaluate((item) => {
      const img = document.querySelector(item.sel);
      if (img) img.style.objectPosition = item.pos;
      const content = document.querySelector(item.contentSel);
      if (content) {
        content.style.maxWidth = '490px';
      }
      const overlay = document.querySelector(item.overlaySel);
      if (overlay) {
        overlay.style.background = 'linear-gradient(90deg, rgba(7,25,35,0.92) 0%, rgba(7,25,35,0.78) 55%, rgba(7,25,35,0.3) 100%), linear-gradient(180deg, rgba(7,25,35,0.2) 0%, rgba(7,25,35,0.5) 60%, rgba(11,32,41,0.95) 100%)';
      }
    }, item);

    await new Promise(r => setTimeout(r, 400));
    const hero = await page.$('section[class*="hero"]');
    const filename = path.join(OUT_DIR, `${item.id}_768.png`);
    await hero.screenshot({ path: filename });
    console.log('Saved', filename);
  }

  await browser.close();
}

run().catch(console.error);
