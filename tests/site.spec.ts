import { test, expect } from '@playwright/test';

const paths = ['/', '/tag', '/aegis-os', '/services', '/company', '/contact'];

for (const path of paths) {
  test(`${path} renders its content and SEO without JavaScript`, async ({ browser, request }) => {
    const response = await request.get(path);
    expect(response.status()).toBe(200);
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto(`http://localhost:3003${path}`);
    await expect(page.locator('main h1')).toBeVisible();
    await expect(page).toHaveTitle(/Tesseracton/);
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(new URL(canonical!).pathname).toBe(path);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /\S.{40,}/);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', canonical!);
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image');
    await expect(page.locator('footer a[href="/tag"]')).toBeVisible();
    await context.close();
  });

  test(`${path} hydrates without browser errors at desktop and mobile widths`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(path);
      await expect(page.locator('main h1')).toBeVisible();
      await page.locator('nav').getByRole('button', { name: width === 390 ? 'Pilot' : 'Request a Pilot', exact: true }).click();
      await expect(page.getByRole('heading', { name: 'Request Enterprise Pilot', exact: true })).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    }
    expect(errors).toEqual([]);
  });
}

test('navigation supports URLs, reload, browser history, and legacy hashes', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Explore TAG (Assurance Grid)', exact: true }).click();
  await expect(page).toHaveURL(/\/tag$/);
  await page.reload();
  await expect(page.getByRole('button', { name: 'Jump to Live Nodes' })).toBeVisible();
  await page.goBack();
  await expect(page).toHaveURL(/\/$/);
  for (const path of paths.slice(1)) {
    await page.goto(`/#${path.slice(1)}`);
    await expect(page).toHaveURL(new RegExp(`${path}$`));
  }
});

test('mobile navigation closes after selecting a route', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Toggle menu' }).click();
  await page.locator('nav').getByRole('link', { name: 'Company', exact: true }).click();
  await expect(page).toHaveURL(/\/company$/);
  await expect(page.locator('nav').getByRole('link', { name: 'Company', exact: true }).last()).toBeHidden();
});

test('dashboard filtering and product profiles remain interactive', async ({ page }) => {
  await page.goto('/tag');
  const filter = page.getByPlaceholder('Filter by node, GPU, or hash...');
  await filter.fill('no-matching-node');
  await expect(page.locator('tbody tr').filter({ hasText: 'H100' })).toHaveCount(0);
  await filter.fill('');
  await expect(page.locator('tbody tr').first()).toBeVisible();
  await page.goto('/aegis-os');
  await page.getByRole('button').filter({ has: page.getByRole('heading', { name: 'Cluster', exact: true }) }).click();
  await expect(page.getByRole('heading', { name: 'Cluster Profile', exact: true })).toBeVisible();
});

test('crawler files, social image, image optimization, and 404 work', async ({ request }) => {
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  const xml = await sitemap.text();
  const locations = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]).pathname);
  expect(locations.sort()).toEqual([...paths].sort());
  expect(await (await request.get('/robots.txt')).text()).toContain('/sitemap.xml');
  const image = await request.get('/opengraph-image');
  expect(image.status()).toBe(200);
  expect(image.headers()['content-type']).toContain('image/png');
  const optimized = await request.get('/_next/image?url=%2Fopengraph-image&w=640&q=75', { headers: { Accept: 'image/webp' } });
  expect(optimized.status()).toBe(200);
  expect(optimized.headers()['content-type']).toContain('image/webp');
  expect((await request.get('/missing-page')).status()).toBe(404);
});
