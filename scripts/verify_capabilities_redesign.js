import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:4173';
const OUT_DIR = path.resolve('debug_screenshots/capabilities_final_redesign');
fs.mkdirSync(OUT_DIR, { recursive: true });

async function verify() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // 1. AI Agents Page Desktop 1440
  console.log('Capturing AI Agents Desktop 1440...');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/capabilities/ai-agents`, { waitUntil: 'networkidle0' });
  await page.screenshot({
    path: path.join(OUT_DIR, '01_ai_agents_hero_desktop.png'),
    clip: { x: 0, y: 0, width: 1440, height: 850 }
  });

  // Capture Section 03: 6-card capability grid
  await page.evaluate(() => {
    const el = document.querySelector('.agent-showcase-section');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 400));
  const showcaseBBox = await page.evaluate(() => {
    const el = document.querySelector('.agent-showcase-section');
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { x: 0, y: window.scrollY + r.top, width: 1440, height: r.height };
  });
  if (showcaseBBox) {
    await page.screenshot({
      path: path.join(OUT_DIR, '02_ai_agents_six_cards_desktop.png'),
      clip: showcaseBBox
    });
  }

  // 2. AI Agents Tablet 768px (2-column test)
  console.log('Capturing AI Agents Tablet 768...');
  await page.setViewport({ width: 768, height: 1024 });
  await page.goto(`${BASE_URL}/capabilities/ai-agents`, { waitUntil: 'networkidle0' });
  await page.evaluate(() => {
    const el = document.querySelector('.agent-showcase-section');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({
    path: path.join(OUT_DIR, '03_ai_agents_six_cards_tablet.png')
  });

  // 3. AI Agents Mobile 390px (1-column test)
  console.log('Capturing AI Agents Mobile 390...');
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(`${BASE_URL}/capabilities/ai-agents`, { waitUntil: 'networkidle0' });
  await page.screenshot({
    path: path.join(OUT_DIR, '04_ai_agents_hero_mobile.png'),
    clip: { x: 0, y: 0, width: 390, height: 800 }
  });
  await page.evaluate(() => {
    const el = document.querySelector('.agent-showcase-section');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({
    path: path.join(OUT_DIR, '05_ai_agents_six_cards_mobile.png')
  });

  // 4. Voice AI Hero Desktop & Mobile
  console.log('Capturing Voice AI...');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/capabilities/voice-ai`, { waitUntil: 'networkidle0' });
  await page.screenshot({
    path: path.join(OUT_DIR, '06_voice_ai_hero_desktop.png'),
    clip: { x: 0, y: 0, width: 1440, height: 850 }
  });

  // 5. Workflow Automation Hero Desktop & Mobile
  console.log('Capturing Workflow Automation...');
  await page.goto(`${BASE_URL}/capabilities/workflow-automation`, { waitUntil: 'networkidle0' });
  await page.screenshot({
    path: path.join(OUT_DIR, '07_workflow_automation_hero_desktop.png'),
    clip: { x: 0, y: 0, width: 1440, height: 850 }
  });

  // 6. Custom AI Solutions Hero Desktop & Mobile
  console.log('Capturing Custom AI Solutions...');
  await page.goto(`${BASE_URL}/capabilities/custom-ai-solutions`, { waitUntil: 'networkidle0' });
  await page.screenshot({
    path: path.join(OUT_DIR, '08_custom_ai_hero_desktop.png'),
    clip: { x: 0, y: 0, width: 1440, height: 850 }
  });

  await browser.close();
  console.log('All capability redesign captures completed successfully!');
}

verify().catch(console.error);
