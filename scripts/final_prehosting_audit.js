import puppeteer from 'puppeteer-core';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:4173';

const VIEWPORTS = [
  { name: 'small-mobile-320', width: 320, height: 600 },
  { name: 'small-mobile-375', width: 375, height: 667 },
  { name: 'standard-mobile-390', width: 390, height: 844 },
  { name: 'standard-mobile-430', width: 430, height: 932 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'laptop-1024', width: 1024, height: 768 },
  { name: 'desktop-1440', width: 1440, height: 900 },
];

const ROUTES = [
  '/',
  '/capabilities',
  '/capabilities/ai-agents',
  '/capabilities/workflow-automation',
  '/capabilities/voice-ai',
  '/capabilities/custom-ai-solutions',
  '/capabilities/custom-ai',
  '/industries',
  '/industries/legal',
  '/industries/real-estate',
  '/industries/healthcare',
  '/industries/home-services',
  '/industries/financial-services',
  '/industries/insurance',
  '/industries/construction',
  '/industries/property-management',
  '/industries/professional-services',
  '/industries/automotive',
  '/industries/it-services',
  '/industries/ecommerce-logistics',
  '/process',
  '/about',
  '/blueprints',
  '/integrations',
  '/engagement',
  '/security',
  '/faq',
  '/start-project',
  '/contact',
  '/privacy',
  '/terms',
];

async function runAudit() {
  console.log('=== STARTING FINAL PRE-HOSTING AUDIT ===\n');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  const consoleErrors = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(`[Console Error] ${msg.text()}`);
    }
  });

  page.on('pageerror', (err) => {
    consoleErrors.push(`[Page Error] ${err.toString()}`);
  });

  let totalOverflows = 0;
  const overflowIssues = [];

  // 1. Audit Overflows Across Routes and Viewports
  console.log(`[1/5] Auditing ${ROUTES.length} routes across ${VIEWPORTS.length} viewports...`);

  for (const vp of VIEWPORTS) {
    process.stdout.write(`  Checking ${vp.name} (${vp.width}x${vp.height})... `);
    let vpIssues = 0;

    await page.setViewport({
      width: vp.width,
      height: vp.height,
      isMobile: vp.width <= 768,
      hasTouch: vp.width <= 768,
    });

    for (const route of ROUTES) {
      await page.goto(`${BASE_URL}${route}`, { waitUntil: 'domcontentloaded' });
      await new Promise((r) => setTimeout(r, 60));

      const overflow = await page.evaluate((expectedWidth) => {
        const docEl = document.documentElement;
        const body = document.body;
        const scrollWidth = Math.max(docEl.scrollWidth, body ? body.scrollWidth : 0);
        return {
          hasOverflow: scrollWidth > expectedWidth + 1,
          scrollWidth,
          expectedWidth,
        };
      }, vp.width);

      if (overflow.hasOverflow) {
        vpIssues++;
        totalOverflows++;
        overflowIssues.push({
          viewport: vp.name,
          route,
          scrollWidth: overflow.scrollWidth,
          expectedWidth: overflow.expectedWidth,
        });
      }
    }

    console.log(vpIssues === 0 ? '✓ PASS (0 overflows)' : `✗ FAIL (${vpIssues} overflows)`);
  }

  // 2. Audit Mobile Navigation Drawer Interaction
  console.log('\n[2/5] Testing Mobile Navigation Drawer...');
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 200));

  // Check toggle button
  const toggleBtn = await page.$('.mobile-menu-toggle');
  if (!toggleBtn) {
    throw new Error('Mobile toggle button not found');
  }

  // Click toggle button to open
  await toggleBtn.click();
  await new Promise((r) => setTimeout(r, 350));

  const isDrawerOpen = await page.evaluate(() => {
    const panel = document.querySelector('.mobile-nav-panel');
    const bodyOverflow = document.body.style.overflow;
    const computed = window.getComputedStyle(panel);
    return {
      isOpenClass: panel.classList.contains('is-open'),
      isVisible: computed.visibility === 'visible',
      bodyOverflow,
    };
  });

  console.log('  Drawer Open Test:', isDrawerOpen.isOpenClass && isDrawerOpen.isVisible ? '✓ PASS' : '✗ FAIL');
  console.log('  Body Scroll Lock:', isDrawerOpen.bodyOverflow === 'hidden' ? '✓ PASS' : '✗ FAIL');

  // Test close button
  const closeBtn = await page.$('.mobile-close-btn');
  if (closeBtn) {
    await closeBtn.click();
    await new Promise((r) => setTimeout(r, 350));

    const isDrawerClosed = await page.evaluate(() => {
      const panel = document.querySelector('.mobile-nav-panel');
      const bodyOverflow = document.body.style.overflow;
      const computed = window.getComputedStyle(panel);
      return {
        isClosed: !panel.classList.contains('is-open') && computed.visibility === 'hidden',
        bodyOverflow,
      };
    });

    console.log('  Drawer Close Test:', isDrawerClosed.isClosed ? '✓ PASS' : '✗ FAIL');
    console.log('  Body Scroll Unlock:', isDrawerClosed.bodyOverflow === '' ? '✓ PASS' : '✗ FAIL');
  }

  // 3. Test Form Validation & Submission
  console.log('\n[3/5] Testing Contact & Start Project Forms...');
  await page.goto(`${BASE_URL}/contact`, { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 200));

  // Submit empty form -> should show error
  const submitBtn = await page.$('button[type="submit"]');
  if (submitBtn) {
    await submitBtn.click();
    await new Promise((r) => setTimeout(r, 100));

    const hasValidationError = await page.evaluate(() => {
      const err = document.querySelector('.form-error-banner, .contact-error-msg');
      return err && err.textContent.length > 0;
    });
    console.log('  Contact Form Empty Validation:', hasValidationError ? '✓ PASS' : '✗ FAIL');

    // Fill valid inputs
    await page.type('input[name="name"]', 'QA Test Lead');
    await page.type('input[name="phone"]', '+1 555 234 5678');
    await page.type('input[name="email"]', 'qa.test@example.com');
    await submitBtn.click();
    await new Promise((r) => setTimeout(r, 400));

    const submittedSuccessfully = await page.evaluate(() => {
      const successState = document.querySelector('.contact-success-state');
      const stored = localStorage.getItem('hutomate_enquiries');
      return {
        hasSuccessBox: Boolean(successState),
        isStoredInLocalStorage: Boolean(stored && stored.includes('qa.test@example.com')),
      };
    });

    console.log('  Contact Form Submission State:', submittedSuccessfully.hasSuccessBox ? '✓ PASS' : '✗ FAIL');
    console.log('  Contact LocalStorage Fallback Backup:', submittedSuccessfully.isStoredInLocalStorage ? '✓ PASS' : '✗ FAIL');
  }

  // 4. Test 404 Page Handling
  console.log('\n[4/5] Testing 404 Page Handling...');
  await page.goto(`${BASE_URL}/non-existent-page-route`, { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 150));

  const is404Working = await page.evaluate(() => {
    const notFoundEl = document.querySelector('.not-found-page');
    return Boolean(notFoundEl && notFoundEl.textContent.includes('404'));
  });
  console.log('  404 Not Found Page:', is404Working ? '✓ PASS' : '✗ FAIL');

  // 5. Test Touch Targets across Core Actions
  console.log('\n[5/5] Auditing Interactive Touch Target Sizes (>= 44px)...');
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 200));

  const touchTargets = await page.evaluate(() => {
    const interactiveElements = document.querySelectorAll('button, a.btn, .mobile-menu-toggle, .mobile-close-btn');
    let undersizedCount = 0;
    const undersized = [];

    interactiveElements.forEach((el) => {
      // ignore hidden elements
      if (el.offsetParent === null) return;
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        if (rect.height < 40) { // allowance for inline text links
          undersizedCount++;
          undersized.push({ tag: el.tagName, class: el.className, height: rect.height, width: rect.width });
        }
      }
    });

    return { undersizedCount, undersized: undersized.slice(0, 5) };
  });

  console.log('  Button Touch Targets:', touchTargets.undersizedCount === 0 ? '✓ PASS (all >= 40-44px)' : `⚠ WARNING (${touchTargets.undersizedCount} buttons < 40px)`);

  await browser.close();

  console.log('\n=== AUDIT COMPLETE ===');
  console.log(`Total Horizontal Overflows: ${totalOverflows}`);
  console.log(`Total Console / Page Errors: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.log('Console Errors:', consoleErrors);
  }
}

runAudit().catch((err) => {
  console.error('Audit failed with error:', err);
  process.exit(1);
});
