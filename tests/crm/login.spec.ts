
import { test, expect } from '@playwright/test';
import { userData } from '../../testData/userData'; 
/*
test('CRM Login', async ({ page }) => {

await page.goto('https://brand1.crm-uat.fynxt.com/');
const emailField = page.locator('input[id="loginId"]');
const passwordField = page.locator('input[id="password"]');

await expect(emailField).toBeVisible();
await expect(passwordField).toBeVisible();
await emailField.fill(userData.email);
await passwordField.fill(userData.password);
await page.getByRole('button', { name: 'Submit' }).click();
await expect(page).toHaveURL(/dashboard/);

await page.screenshot({
    path: 'screenshots/full-page.png',
    fullPage: true
});

});
*/
test('User customisations->Data model flow', async ({ page }) => {

await page.goto('https://brand1.crm-uat.fynxt.com/');
const emailField = page.locator('input[id="loginId"]');
const passwordField = page.locator('input[id="password"]');

await expect(emailField).toBeVisible();
await expect(passwordField).toBeVisible();
await emailField.fill(userData.email);
await passwordField.fill(userData.password);
await page.getByRole('button', { name: 'Submit' }).click();
await expect(page).toHaveURL(/dashboard/);

await page.screenshot({
    path: 'screenshots/full-page.png',
    fullPage: true
});

const salesDashboard = page.getByRole('link', { name: 'Sales' });
await expect(salesDashboard).toBeVisible();
await salesDashboard.click();
});