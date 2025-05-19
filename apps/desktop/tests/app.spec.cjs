import { test, expect } from '@playwright/test';

test('shows greeting after typing name and clicking button', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.fill('input[type="text"]', 'Ruchi');
  await page.click('button');
  await page.waitForTimeout(1000);

  const message = await page.textContent('p');
  
  expect(message).toContain('Hello Ruchi');
});
