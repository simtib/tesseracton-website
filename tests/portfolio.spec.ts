import { test, expect } from '@playwright/test';
import { products } from '../src/data/products';

for (const width of [390, 768, 1440]) {
  test(`four-product navigation and previews at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await expect(page.getByRole('region', { name: 'Product portfolio' }).getByRole('link')).toHaveCount(4);
    for (const product of products) {
      await page.locator('nav').getByRole('button', { name: width < 1024 ? 'Toggle menu' : 'Products', exact: true }).click();
      const menu = page.locator(width < 1024 ? '#mobile-navigation' : '#products-navigation');
      const link = menu.getByRole('link').filter({ hasText: product.name });
      await expect(link).toBeVisible();
      await link.click();
      await expect(page).toHaveURL(new RegExp(`${product.href}$`));
      await expect(page.locator('main h1')).toBeVisible();
      await page.locator('nav').getByRole('button', { name: width < 1024 ? 'Toggle menu' : 'Products', exact: true }).click();
      await expect(page.locator(width < 1024 ? '#mobile-navigation' : '#products-navigation').getByRole('link').filter({ hasText: product.name })).toHaveAttribute('aria-current', 'page');
      await page.keyboard.press('Escape');
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    }
    await expect(page.getByText('Detailed product page in preparation')).toBeVisible();
    await expect(page.getByText(/commercial concept, not a released capability/)).toBeVisible();
  });
}
