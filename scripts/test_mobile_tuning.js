import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:5173';

const TESTS = [
  // AI Agents variants
  { id: 'ai-agents-v1', path: '/capabilities/ai-agents', sel: '.agent-hero-bg', overlaySel: '.agent-hero-overlay', pos: '86% 15%', overlay: 'linear-gradient(180deg, rgba(7,25,35,0.4) 0%, rgba(7,25,35,0.78) 45%, rgba(7,25,35,0.95) 100%)' },
  { id: 'ai-agents-v2', path: '/capabilities/ai-agents', sel: '.agent-hero-bg', overlaySel: '.agent-hero-overlay', pos: '92% 10%', overlay: 'linear-gradient(180deg, rgba(7,25,35,0.3) 0%, rgba(7,25,35,0.82) 48%, rgba(7,25,35,0.96) 100%)' },
  { id: 'ai-agents-v3', path: '/capabilities/ai-agents', sel: '.agent-hero-bg', overlaySel: '.agent-hero-overlay', pos: '82% 25%', overlay: 'linear-gradient(180deg, rgba(7,25,35,0.5) 0%, rgba(7,25,35,0.85) 50%, rgba(7,25,35,0.98) 100%)' },
  
  // Voice AI variants
  { id: 'voice-ai-v1', path: '/capabilities/voice-ai', sel: '.voice-hero-bg', overlaySel: '.voice-hero-overlay', pos: '90% 12%', overlay: 'linear-gradient(180deg, rgba(7,25,35,0.35) 0%, rgba(7,25,35,0.8) 45%, rgba(7,25,35,0.96) 100%)' },
  { id: 'voice-ai-v2', path: '/capabilities/voice-ai', sel: '.voice-hero-bg', overlaySel: '.voice-hero-overlay', pos: '86% 8%', overlay: 'linear-gradient(180deg, rgba(7,25,35,0.25) 0%, rgba(7,25,35,0.75) 42%, rgba(7,25,35,0.96) 100%)' },
  
  // Workflow variants
  { id: 'wf-v1', path: '/capabilities/workflow-automation', sel: '.wf-hero-bg', overlaySel: '.wf-hero-overlay', pos: '92% 30%', overlay: 'linear-gradient(180deg, rgba(7,25,35,0.3) 0%, rgba(7,25,35,0.8) 45%, rgba(7,25,35,0.96) 100%)' },
  { id: 'wf-v2', path: '/capabilities/workflow-automation', sel: '.wf-hero-bg', overlaySel: '.wf-hero-overlay', pos: '88% 20%', overlay: 'linear-gradient(180deg, rgba(7,25,35,0.25) 0%, rgba(7,25,35,0.75) 40%, rgba(7,25,35,0.96) 100%)' },

  // Custom AI variants
  { id: 'custom-v1', path: '/capabilities/custom-ai-solutions', sel: '.custom-hero-bg', overlaySel: '.custom-hero-overlay', pos: '92% 25%', overlay: 'linear-gradient(180deg, rgba(7,25,35,0.3) 0%, rgba(7,25,35,0.8) 45%, rgba(7,25,35,0.96) 100%)' },
  { id: 'custom-v2', path: '/capabilities/custom-ai-solutions', sel: '.custom-hero-bg', overlaySel: '.custom-hero-overlay', pos: '88% 18%', overlay: 'linear-gradient(180deg, rgba(7,25,35,0.25) 0%, rgba(7,25,35,0.75) 40%, rgba(7,25,35,0.96) 100%)' },
];

const OUT_DIR = path.resolve('debug_screenshots/hero_audit/mobile_test');
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
      const img = document.querySelector(item.sel);
      if (img) img.style.objectPosition = item.pos;
      const overlay = document.querySelector(item.overlaySel);
      if (overlay) overlay.style.background = item.overlay;
    }, item);

    await new Promise(r => setTimeout(r, 400));
    const hero = await page.$('section[class*="hero"]');
    const filename = path.join(OUT_DIR, `${item.id}.png`);
    await hero.screenshot({ path: filename });
    console.log('Saved', filename);
  }

  await browser.close();
}

run().catch(console.error);
