const { test, expect } = require('@playwright/test');

test('login page test', async ({ page }) => {

    await page.goto('https://example.com');

    await expect(page).toHaveTitle(/Example/);

});