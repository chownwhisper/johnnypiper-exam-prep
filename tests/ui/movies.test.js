const { test, expect } = require('@playwright/test');

test('Check movies page', async ({ page }) => {
  await page.goto('https://johnnypiper-deployment.onrender.com/movies'); // Adjust the URL as needed
  const list = await page.$('ul'); // Update the selector
  expect(list).toBeTruthy();
});

