import puppeteer from 'puppeteer-core';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PREVIEW_URL = 'http://localhost:4173';

async function measureRoute(browser, route, isMobile = false) {
  const page = await browser.newPage();
  if (isMobile) {
    await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  } else {
    await page.setViewport({ width: 1440, height: 900 });
  }

  // Inject Web Vitals listener
  await page.evaluateOnNewDocument(() => {
    window.__vitals = { lcp: 0, cls: 0, fcp: 0, ttfb: 0 };

    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          window.__vitals.fcp = Math.round(entry.startTime);
        }
      }
    }).observe({ type: 'paint', buffered: true });

    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        window.__vitals.lcp = Math.round(lastEntry.startTime);
      }
    }).observe({ type: 'largest-contentful-paint', buffered: true });

    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          window.__vitals.cls += entry.value;
        }
      }
    }).observe({ type: 'layout-shift', buffered: true });
  });

  const response = await page.goto(`${PREVIEW_URL}${route}`, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));

  const metrics = await page.evaluate(() => {
    const nav = performance.getEntriesByType('navigation')[0];
    return {
      ttfb: nav ? Math.round(nav.responseStart - nav.requestStart) : 0,
      domLoaded: nav ? Math.round(nav.domContentLoadedEventEnd - nav.startTime) : 0,
      loadTime: nav ? Math.round(nav.loadEventEnd - nav.startTime) : 0,
      fcp: window.__vitals.fcp || 0,
      lcp: window.__vitals.lcp || 0,
      cls: Number((window.__vitals.cls || 0).toFixed(4))
    };
  });

  await page.close();
  return metrics;
}

async function runBenchmark() {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: CHROME_PATH,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const testRoutes = ['/', '/capabilities', '/industries/real-estate', '/contact', '/privacy'];
  const results = { desktop: {}, mobile: {} };

  console.log('--- Measuring Desktop Performance ---');
  for (const r of testRoutes) {
    results.desktop[r] = await measureRoute(browser, r, false);
    console.log(`Desktop ${r}:`, results.desktop[r]);
  }

  console.log('--- Measuring Mobile Performance ---');
  for (const r of testRoutes) {
    results.mobile[r] = await measureRoute(browser, r, true);
    console.log(`Mobile ${r}:`, results.mobile[r]);
  }

  await browser.close();
  console.log('\nFinal Core Web Vitals Benchmark:');
  console.log(JSON.stringify(results, null, 2));
}

runBenchmark().catch(console.error);
