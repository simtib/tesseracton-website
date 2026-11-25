import { test, expect } from '@playwright/test';

test('navigation has one pilot CTA and keyboard-accessible disclosures', async ({ page }) => {
  await page.goto('/company');
  const nav = page.getByRole('navigation', { name: 'Main navigation' });
  for (const width of [390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await expect(nav.getByRole('button', { name: /pilot/i })).toHaveCount(1);
    if (width < 1024) {
      const toggle = nav.getByRole('button', { name: 'Toggle menu' });
      await toggle.click();
      await expect(toggle).toHaveAttribute('aria-expanded', 'true');
      await expect(nav.getByRole('link', { name: 'Company', exact: true })).toHaveAttribute('aria-current', 'page');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Escape');
      await expect(toggle).toHaveAttribute('aria-expanded', 'false');
      await expect(toggle).toBeFocused();
    }
  }
  const products = nav.getByRole('button', { name: 'Products' });
  await products.focus();
  await page.keyboard.press('ArrowDown');
  await expect(products).toHaveAttribute('aria-expanded', 'true');
  await expect(nav.getByRole('link', { name: /^Aegis/ })).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(nav.getByRole('link', { name: /^AI Infrastructure/ })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(products).toBeFocused();
  await expect(products).toHaveAttribute('aria-expanded', 'false');
  await products.click();
  await nav.getByRole('link', { name: /^Tesseracton Assurance Grid/ }).click();
  await expect(page).toHaveURL(/\/tag$/);
  await expect(page.locator('main h1')).toContainText('Prove your regulated compute');
  await products.click();
  await expect(nav.getByRole('link', { name: /^Tesseracton Assurance Grid/ })).toHaveAttribute('aria-current', 'page');
});

test('pilot dialog contains focus, validates locally, and supports edit/reset/reopen', async ({ page }) => {
  await page.goto('/');
  const trigger = page.locator('nav').getByRole('button', { name: 'Request a Pilot', exact: true });
  await trigger.click();
  const dialog = page.getByRole('dialog', { name: 'Request Enterprise Pilot' });
  await expect(dialog.getByRole('heading', { name: 'Request Enterprise Pilot' })).toBeFocused();
  await expect(dialog).toContainText('nothing is sent or saved');
  const slider = dialog.getByRole('slider', { name: 'GPU count' });
  await slider.focus();
  await page.keyboard.press('End');
  await expect(slider).toHaveValue('1024');
  await expect(slider).toHaveAttribute('aria-valuetext', '1,024 GPUs');
  await page.keyboard.press('Home');
  await expect(slider).toHaveValue('8');
  await page.keyboard.press('ArrowRight');
  await expect(slider).toHaveValue('16');
  const checkbox = dialog.getByRole('checkbox').first();
  await checkbox.focus();
  await page.keyboard.press('Space');
  await expect(checkbox).not.toBeChecked();
  const review = dialog.getByRole('button', { name: 'Review demo request' });
  await review.focus();
  await page.keyboard.press('Tab');
  await expect(dialog.getByRole('button', { name: 'Close pilot dialog' })).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect(review).toBeFocused();
  await review.click();
  await expect(dialog.getByRole('alert')).toContainText('valid work email');
  const email = dialog.getByLabel('Work Email (required)');
  await expect(email).toBeFocused();
  await expect(email).toHaveAttribute('aria-invalid', 'true');
  await email.fill('architect@example.com');
  await dialog.getByLabel('Organization / Cloud Provider (required)').fill('Example Lab');
  await review.click();
  await expect(dialog.getByRole('heading', { name: 'Demo request ready to review' })).toBeFocused();
  await expect(dialog).toContainText('No request has been received');
  await dialog.getByRole('button', { name: 'Edit details' }).click();
  await expect(email).toHaveValue('architect@example.com');
  await review.click();
  await dialog.getByRole('button', { name: 'Start a new demo request' }).click();
  await expect(email).toHaveValue('');
  await expect(slider).toHaveValue('64');
  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await trigger.click();
  await expect(email).toHaveValue('');
  await expect(review).toBeVisible();
});

test('dashboard selection, inspector and sample proof agree after simulated changes', async ({ page }) => {
  await page.goto('/tag');
  const dashboard = page.locator('#interactive-dashboard-section');
  await expect(dashboard).toContainText('no signed evidence is generated');
  const row = dashboard.getByRole('row').filter({ hasText: 'node-va-h100-01' });
  const select = row.getByRole('button', { name: /inspect node/ });
  await select.focus();
  await page.keyboard.press('Enter');
  await expect(select).toHaveAttribute('aria-pressed', 'true');
  await row.getByRole('button', { name: /Simulate cordon/ }).click();
  await expect(dashboard.getByText('Demo drift detected', { exact: true })).toBeVisible();
  await dashboard.getByRole('button', { name: 'View sample proof', exact: true }).click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toContainText('Demo status: Drift detected');
  await expect(dialog.locator('pre')).toContainText('DRIFT_DETECTED');
  await page.keyboard.press('Escape');
  await row.getByRole('button', { name: /Simulate re-attestation/ }).click();
  await row.getByRole('button', { name: /View sample proof for/ }).click();
  await expect(dialog).toContainText('Demo status: Verified');
});

test('dashboard filters have a recoverable empty state and tabs support arrow keys', async ({ page }) => {
  await page.goto('/tag');
  const dashboard = page.locator('#interactive-dashboard-section');
  const search = dashboard.getByRole('textbox', { name: 'Search sample nodes' });
  await search.fill('no matching node');
  await expect(dashboard.getByText('No sample nodes match your filters.')).toBeVisible();
  await expect(dashboard.getByRole('button', { name: 'View sample proof', exact: true })).toHaveCount(0);
  await dashboard.getByRole('button', { name: 'Clear filters' }).click();
  await expect(search).toBeFocused();
  await expect(dashboard.locator('tbody tr')).toHaveCount(6);
  await dashboard.getByLabel('Region', { exact: true }).selectOption('EU');
  await expect(dashboard.locator('tbody tr')).toHaveCount(2);
  await dashboard.getByRole('button', { name: 'Reset filters' }).click();
  await expect(dashboard.locator('tbody tr')).toHaveCount(6);
  await dashboard.getByRole('tab', { name: /Node Fleet/ }).focus();
  await page.keyboard.press('ArrowRight');
  await expect(dashboard.getByRole('tab', { name: 'Evidence Log Feed' })).toHaveAttribute('aria-selected', 'true');
  await expect(dashboard.getByRole('tabpanel')).toContainText('Sample ledger events');
  await page.keyboard.press('End');
  await expect(dashboard.getByRole('tab', { name: 'Compliance Mappings' })).toBeFocused();
  await page.keyboard.press('Home');
  await dashboard.getByRole('button', { name: 'Run demo sweep' }).click();
  await expect(dashboard.getByRole('status')).toContainText('No hardware was contacted', { timeout: 5000 });
});

test('copy confirms only on success, failures recover, and exports identify samples', async ({ page }) => {
  await page.goto('/tag');
  await page.getByRole('button', { name: /View sample proof for/ }).first().click();
  const dialog = page.getByRole('dialog');
  await page.evaluate(() => {
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: () => Promise.reject(new Error('Denied')) } });
  });
  await dialog.getByRole('button', { name: 'Copy JSON', exact: true }).click();
  await expect(dialog.getByRole('alert')).toContainText('Could not copy');
  await expect(dialog.getByRole('button', { name: 'Copied', exact: true })).toHaveCount(0);
  await page.evaluate(() => {
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: () => new Promise<void>(resolve => { (window as unknown as { finishCopy: () => void }).finishCopy = resolve; }) } });
  });
  await dialog.getByRole('button', { name: 'Copy JSON', exact: true }).click();
  await expect(dialog.getByRole('button', { name: 'Copying...' })).toBeDisabled();
  await expect(dialog.getByRole('status')).toHaveText('');
  await page.evaluate(() => (window as unknown as { finishCopy: () => void }).finishCopy());
  await expect(dialog.getByRole('status')).toHaveText('Sample JSON copied to clipboard.');
  const downloadPromise = page.waitForEvent('download');
  await dialog.getByRole('button', { name: 'Download sample JSON' }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toMatch(/^tesseracton-demo-proof-/);
  const stream = await download.createReadStream();
  let contents = '';
  for await (const chunk of stream!) contents += chunk.toString();
  const payload = JSON.parse(contents);
  expect(payload.simulation).toBe(true);
  expect(payload.notice).toContain('No hardware verification');
  await page.keyboard.press('Escape');
  await page.getByRole('button', { name: /View sample proof for/ }).first().click();
  await expect(dialog.getByRole('button', { name: 'Copy JSON', exact: true })).toBeVisible();
});

test('mobile dialogs fit the viewport and footer contains no unsupported status or inert resources', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/tag');
  const footer = page.locator('footer');
  await expect(footer).not.toContainText('Operational');
  await expect(footer).not.toContainText('Security Whitepaper');
  await expect(footer.getByRole('link', { name: 'Tesseracton Assurance Grid (TAG)' })).toBeVisible();
  await page.getByRole('button', { name: /View sample proof for/ }).first().click();
  const dialog = page.getByRole('dialog');
  await expect(dialog.getByRole('button', { name: 'Download sample JSON' })).toBeVisible();
  expect(await dialog.evaluate(element => element.scrollWidth <= element.clientWidth)).toBe(true);
  await page.keyboard.press('Escape');
  await page.locator('nav').getByRole('button', { name: 'Pilot', exact: true }).click();
  expect(await dialog.evaluate(element => element.scrollWidth <= element.clientWidth)).toBe(true);
  await dialog.getByRole('button', { name: 'Review demo request' }).click();
  await expect(dialog.getByLabel('Work Email (required)')).toBeFocused();
});

