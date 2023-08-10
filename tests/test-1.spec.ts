import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.waitForTimeout(200000); // Wait for 2 seconds
  await page.goto("http://localhost:3000");
  await page.getByRole('link', { name: 'About Me' }).click();
  await page.getByRole('link', { name: 'Projects' }).click();
  await page.getByRole('link', { name: 'Experience' }).click();
  await page.getByRole('link', { name: 'Skills' }).click();
  await page.getByRole('heading', { name: 'Skills' }).click();
  await page.getByRole('heading', { name: 'Work Experience' }).click();
  await page.getByRole('heading', { name: 'Projects' }).click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('heading', { name: 'Contact Information' }).click();
});