const { test, expect } = require('@playwright/test');

test('Check home page', async ({ page }) => {
  await page.goto('https://johnnypiper-deployment.onrender.com'); // Adjust the URL as needed
  const heading = await page.$('h1');
  const text = await heading.textContent();
  expect(text).toContain('Movies Collection');
});

