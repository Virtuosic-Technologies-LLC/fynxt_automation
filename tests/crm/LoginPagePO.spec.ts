import { type Page, type Locator, expect , test } from '@playwright/test';

  test('QE Platform Login', async ({ page }) => {
  
  await page.goto('http://3.129.154.1:8000');
  
  await page.getByPlaceholder('Email').fill('testuser');
  page.screenshot();
  
  await page.getByPlaceholder('Password').fill('Password@123');
  
  await page.getByRole('button', { name: /login|sign in/i }).click();
  
  await expect(page).toHaveURL(/project-history|dashboard/i);
  
  await page.screenshot({
  path: 'screenshots/full-page.png',
  fullPage: true
  });
  
  });