const { test, expect } = require('@playwright/test');

test.describe('Playwright starter tests', () => {
  test('Playwright homepage has the expected title', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Playwright/);
    await expect(page.getByRole('heading', { name: 'Playwright enables reliable end-to-end testing for modern web apps.' })).toBeVisible();
  });
});
