import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';

const phase = process.argv[2] || 'after';
const baseURL = process.env.BASE_URL || 'http://localhost:3003';
const browser = await chromium.launch();
await mkdir(`.design-checks/${phase}`, { recursive: true });
const results = {};
for (const width of [1440, 390]) {
  const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
  for (const route of ['home', 'tag', 'aegis-os', 'services', 'company', 'contact']) {
    await page.goto(`${baseURL}${phase === 'before' ? `/#${route}` : route === 'home' ? '/' : `/${route}`}`);
    await page.waitForLoadState('networkidle');
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.addStyleTag({ content: '*, *::before, *::after { animation: none !important; transition: none !important; }' });
    results[`${width}/${route}`] = await page.locator('main').evaluate(element => ({
      text: element.innerText,
      height: element.getBoundingClientRect().height,
      headings: [...element.querySelectorAll('h1,h2,h3')].map(heading => {
        const box = heading.getBoundingClientRect();
        const style = getComputedStyle(heading);
        return { text: heading.textContent, x: box.x, y: box.y, width: box.width, height: box.height, font: style.fontFamily, size: style.fontSize };
      }),
    }));
    await page.screenshot({ path: `.design-checks/${phase}/${width}-${route}.png`, fullPage: true, animations: 'disabled' });
  }
  await page.close();
}
await writeFile(`.design-checks/${phase}.json`, JSON.stringify(results, null, 2));
await browser.close();
console.log(`Captured ${Object.keys(results).length} ${phase} desktop/mobile pages.`);
