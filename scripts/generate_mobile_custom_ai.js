import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

async function makeMobileCustomAi() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1920 });

  const srcPath = path.resolve('public/images/hero-custom-ai.jpg');
  const base64 = fs.readFileSync(srcPath).toString('base64');
  const dataUrl = `data:image/jpeg;base64,${base64}`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body, html { margin: 0; padding: 0; width: 1080px; height: 1920px; overflow: hidden; background: #071923; }
        canvas { width: 1080px; height: 1920px; }
      </style>
    </head>
    <body>
      <canvas id="c" width="1080" height="1920"></canvas>
      <script>
        const img = new Image();
        img.onload = () => {
          const c = document.getElementById('c');
          const ctx = c.getContext('2d');
          
          // Image original: 2064 x 1152
          // We want the two architects (on the right half, around x = 1100 to 2064, y = 100 to 1100)
          // To appear in the top 45% of the mobile frame (y = 0 to 860, width 1080)
          // Source rectangle:
          const sx = 950;
          const sy = 0;
          const sw = 1114;
          const sh = 1152;
          
          // Destination: width 1080, height = 1080 * (1152/1114) = 1116
          ctx.drawImage(img, sx, sy, sw, sh, 0, 0, 1080, 1116);
          
          // Deepen and extend the polished floor from y = 800 down to 1920
          const grad = ctx.createLinearGradient(0, 750, 0, 1920);
          grad.addColorStop(0, 'rgba(11, 32, 41, 0)');
          grad.addColorStop(0.25, 'rgba(11, 32, 41, 0.7)');
          grad.addColorStop(0.5, 'rgba(7, 25, 35, 0.94)');
          grad.addColorStop(1, 'rgba(7, 25, 35, 1)');
          
          ctx.fillStyle = grad;
          ctx.fillRect(0, 750, 1080, 1170);
          
          window.canvasDone = true;
        };
        img.src = "${dataUrl}";
      </script>
    </body>
    </html>
  `;

  await page.setContent(html);
  await page.waitForFunction('window.canvasDone === true');
  await new Promise(r => setTimeout(r, 200));

  const outPath = path.resolve('public/images/hero-custom-ai-mobile.jpg');
  const buffer = await page.screenshot({ type: 'jpeg', quality: 90 });
  fs.writeFileSync(outPath, buffer);
  console.log('Saved', outPath);

  await browser.close();
}

makeMobileCustomAi().catch(console.error);
