import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ysheikh728.github.io/Individual-Portfolio-Webpage/');
  await page.getByRole('heading', { name: 'Who Am I?' }).click();
  await page.getByRole('heading', { name: 'Projects' }).click();
  await page.getByRole('heading', { name: 'Work Experience' }).click();
  await page.getByRole('heading', { name: 'Skills' }).click();
  await page.getByRole('heading', { name: 'Contact Information' }).click();
  await page.getByRole('link', { name: 'Yahya Sheikh' }).click();
});