import { test, expect } from '@playwright/test';

test.describe('CSS Dark Mode Verification', () => {
  test('should have different background colors in light and dark mode', async ({ page }) => {
    await page.goto('/test-dark-mode');
    
    // Get the computed style in light mode
    const bodyLight = await page.evaluate(() => {
      const body = document.body;
      return window.getComputedStyle(body).backgroundColor;
    });
    
    // Enable dark mode
    await page.locator('[data-theme-toggle]').first().click();
    await page.waitForTimeout(100);
    
    // Get the computed style in dark mode
    const bodyDark = await page.evaluate(() => {
      const body = document.body;
      return window.getComputedStyle(body).backgroundColor;
    });
    
    console.log('Light mode background:', bodyLight);
    console.log('Dark mode background:', bodyDark);
    
    // They should be different
    expect(bodyLight).not.toBe(bodyDark);
    
    // Check a specific element with dark mode classes
    const boxLight = await page.evaluate(() => {
      const box = document.querySelector('.bg-gray-100.dark\\:bg-gray-800');
      return box ? window.getComputedStyle(box).backgroundColor : null;
    });
    
    // Enable dark mode again (in case it got toggled)
    const html = page.locator('html');
    const hasDark = await html.evaluate(el => el.classList.contains('dark'));
    if (!hasDark) {
      await page.locator('[data-theme-toggle]').first().click();
      await page.waitForTimeout(100);
    }
    
    const boxDark = await page.evaluate(() => {
      const box = document.querySelector('.bg-gray-100.dark\\:bg-gray-800');
      return box ? window.getComputedStyle(box).backgroundColor : null;
    });
    
    console.log('Box light mode background:', boxLight);
    console.log('Box dark mode background:', boxDark);
    
    // These should also be different
    if (boxLight && boxDark) {
      expect(boxLight).not.toBe(boxDark);
    }
  });
});