const { test, expect } = require('@playwright/test');

test('login page test', async ({ page }) => {

    await page.goto('https://example1.com');

    await expect(page).toHaveTitle(/Example/);

});