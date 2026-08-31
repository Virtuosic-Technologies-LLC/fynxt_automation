
import { test, expect } from '@playwright/test';

test('QE Platform Login', async ({ page }) => {

await page.goto('http://3.129.154.1:8000');

const emailField = page.locator('input[type="email"]');
const passwordField = page.locator('input[type="password"]');

await expect(emailField).toBeVisible();
await expect(passwordField).toBeVisible();

await emailField.fill('akshatha.prabhu@virtuosictechnologies.com');
await passwordField.fill('Candeur2026@');

//await page.getByPlaceholder('password').fill('Password@123');

await page.getByRole('button', { name: 'Sign' }).click();

await expect(page).toHaveURL(/project-history|dashboard/i);

await page.screenshot({
path: 'screenshots/full-page.png',
fullPage: true
});

});