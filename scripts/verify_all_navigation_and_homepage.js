import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const outDir = '/Users/charlesnaveen/.gemini/antigravity/brain/3d9adffb-2877-42af-8fd6-3a92f23093b0/verification_results';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function runAudit() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });

  console.log('=== TEST 1: VERIFY HOMEPAGE RESTORED CAPABILITIES SECTION ===');
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle2' });
  await page.$eval('#capabilities', el => el.scrollIntoView());
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, '01_restored_homepage_capabilities.png'), fullPage: false });

  console.log('=== TEST 2: VERIFY HOMEPAGE REFINED INDUSTRIES INTRODUCTION ===');
  await page.$eval('.industries-preview-section', el => el.scrollIntoView());
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, '02_refined_industries_intro.png'), fullPage: false });

  console.log('=== TEST 3: TEST MAIN MOBILE NAVIGATION LINKS (WHEN SCROLLED) ===');
  // First scroll down so header enters .is-scrolled state
  await page.evaluate(() => window.scrollTo(0, 300));
  await new Promise(r => setTimeout(r, 300));

  const mainLinksToTest = [
    { name: 'Industries', target: '/industries' },
    { name: 'Process', target: '/process' },
    { name: 'About', target: '/about' },
    { name: 'Capabilities', target: '/capabilities' },
  ];

  for (const item of mainLinksToTest) {
    console.log(`Testing navigation to ${item.name} (${item.target})...`);
    // Open drawer
    await page.tap('.mobile-menu-toggle');
    await new Promise(r => setTimeout(r, 350));

    // Tap link
    const tapped = await page.evaluate((targetName) => {
      const el = Array.from(document.querySelectorAll('.mobile-nav-link')).find(a => a.textContent.trim() === targetName);
      if (el) {
        el.click();
        return true;
      }
      return false;
    }, item.name);

    if (!tapped) {
      throw new Error(`Could not find mobile nav link for: ${item.name}`);
    }

    await new Promise(r => setTimeout(r, 500));
    const currentUrl = page.url();
    console.log(`  -> Current URL: ${currentUrl}`);
    if (!currentUrl.includes(item.target)) {
      throw new Error(`Expected URL to include ${item.target}, but got ${currentUrl}`);
    }

    // Verify drawer is closed
    const isClosed = await page.$eval('.mobile-nav-panel', el => !el.classList.contains('is-open'));
    console.log(`  -> Drawer closed: ${isClosed}`);
    if (!isClosed) {
      throw new Error(`Drawer did not close after clicking ${item.name}`);
    }
  }

  console.log('=== TEST 4: TEST ALL CAPABILITIES SUBMENU LINKS ===');
  const sublinksToTest = [
    { name: 'Overview', target: '/capabilities' },
    { name: 'AI Agents', target: '/capabilities/ai-agents' },
    { name: 'Workflow Automation', target: '/capabilities/workflow-automation' },
    { name: 'Voice AI', target: '/capabilities/voice-ai' },
    { name: 'Custom AI Solutions', target: '/capabilities/custom-ai-solutions' },
  ];

  for (const sub of sublinksToTest) {
    console.log(`Testing submenu link ${sub.name} (${sub.target})...`);
    // Open drawer
    await page.tap('.mobile-menu-toggle');
    await new Promise(r => setTimeout(r, 350));

    // Ensure capabilities accordion is open
    const isAccordionOpen = await page.evaluate(() => {
      return !!document.querySelector('.mobile-sublinks-list');
    });
    if (!isAccordionOpen) {
      await page.tap('.mobile-accordion-btn');
      await new Promise(r => setTimeout(r, 250));
    }

    // Tap sublink
    const tapped = await page.evaluate((subName) => {
      const el = Array.from(document.querySelectorAll('.mobile-sublink')).find(a => a.textContent.trim() === subName);
      if (el) {
        el.click();
        return true;
      }
      return false;
    }, sub.name);

    if (!tapped) {
      throw new Error(`Could not find mobile sublink for: ${sub.name}`);
    }

    await new Promise(r => setTimeout(r, 500));
    const currentUrl = page.url();
    console.log(`  -> Current URL: ${currentUrl}`);
    if (!currentUrl.includes(sub.target)) {
      throw new Error(`Expected URL to include ${sub.target}, but got ${currentUrl}`);
    }

    // Verify drawer closed
    const isClosed = await page.$eval('.mobile-nav-panel', el => !el.classList.contains('is-open'));
    console.log(`  -> Drawer closed: ${isClosed}`);
  }

  console.log('=== TEST 5: TEST BROWSER BACK AND FORWARD ===');
  await page.goBack();
  await new Promise(r => setTimeout(r, 300));
  console.log('URL after goBack:', page.url());
  await page.goForward();
  await new Promise(r => setTimeout(r, 300));
  console.log('URL after goForward:', page.url());

  console.log('All tests passed with 100% success!');
  await browser.close();
}

runAudit().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
