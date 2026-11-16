import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:4173';
const OUT_DIR = path.resolve('debug_screenshots/all_four_capabilities');
fs.mkdirSync(OUT_DIR, { recursive: true });

const PAGES = [
  {
    name: 'ai_agents',
    url: '/capabilities/ai-agents',
    showcaseSelector: '.agent-showcase-section',
  },
  {
    name: 'voice_ai',
    url: '/capabilities/voice-ai',
    showcaseSelector: '.voice-showcase-section',
  },
  {
    name: 'workflow_automation',
    url: '/capabilities/workflow-automation',
    showcaseSelector: '.wf-showcase-section',
  },
  {
    name: 'custom_ai',
    url: '/capabilities/custom-ai-solutions',
    showcaseSelector: '.custom-showcase-section',
  },
];

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  for (const p of PAGES) {
    console.log(`Processing ${p.name}...`);

    // 1. Desktop 1440
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`${BASE_URL}${p.url}`, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 400));

    // Hero Desktop
    await page.screenshot({
      path: path.join(OUT_DIR, `${p.name}_01_hero_desktop.png`),
      clip: { x: 0, y: 0, width: 1440, height: 850 }
    });

    // 6-Card Grid Desktop
    await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (el) el.scrollIntoView();
    }, p.showcaseSelector);
    await new Promise(r => setTimeout(r, 400));

    const showcaseBox = await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { x: 0, y: window.scrollY + r.top, width: 1440, height: r.height };
    }, p.showcaseSelector);

    if (showcaseBox) {
      await page.screenshot({
        path: path.join(OUT_DIR, `${p.name}_02_six_cards_desktop.png`),
        clip: showcaseBox
      });
    }

    // 2. Tablet 768px
    await page.setViewport({ width: 768, height: 1024 });
    await page.goto(`${BASE_URL}${p.url}`, { waitUntil: 'networkidle0' });
    await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (el) el.scrollIntoView();
    }, p.showcaseSelector);
    await new Promise(r => setTimeout(r, 400));

    const tabletBox = await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { x: 0, y: window.scrollY + r.top, width: 768, height: r.height };
    }, p.showcaseSelector);

    if (tabletBox) {
      await page.screenshot({
        path: path.join(OUT_DIR, `${p.name}_03_six_cards_tablet.png`),
        clip: tabletBox
      });
    }

    // 3. Mobile 390px
    await page.setViewport({ width: 390, height: 844 });
    await page.goto(`${BASE_URL}${p.url}`, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 400));

    // Hero Mobile
    await page.screenshot({
      path: path.join(OUT_DIR, `${p.name}_04_hero_mobile.png`),
      clip: { x: 0, y: 0, width: 390, height: 800 }
    });

    // 6-Card Grid Mobile
    await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (el) el.scrollIntoView();
    }, p.showcaseSelector);
    await new Promise(r => setTimeout(r, 400));

    const mobileBox = await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { x: 0, y: window.scrollY + r.top, width: 390, height: r.height };
    }, p.showcaseSelector);

    if (mobileBox) {
      await page.screenshot({
        path: path.join(OUT_DIR, `${p.name}_05_six_cards_mobile.png`),
        clip: mobileBox
      });
    }
  }

  await browser.close();
  console.log('All screenshots captured successfully!');
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
