import { test, expect } from '@playwright/test';

test.describe('Dark Mode Toggle', () => {
  test('should toggle dark mode when clicking the theme button', async ({ page }) => {
    // Navigate to the home page
    await page.goto('/');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check initial state - should not have dark class
    const htmlElement = page.locator('html');
    await expect(htmlElement).not.toHaveClass(/dark/);
    
    // Find and click the theme toggle button
    const themeToggle = page.locator('[data-theme-toggle]').first();
    await expect(themeToggle).toBeVisible();
    
    // Click the toggle
    await themeToggle.click();
    
    // Wait a bit for the class to be applied
    await page.waitForTimeout(100);
    
    // Check that dark mode is now active
    await expect(htmlElement).toHaveClass(/dark/);
    
    // Check localStorage
    const theme = await page.evaluate(() => localStorage.getItem('theme'));
    expect(theme).toBe('dark');
    
    // Click again to toggle back
    await themeToggle.click();
    await page.waitForTimeout(100);
    
    // Check that dark mode is off
    await expect(htmlElement).not.toHaveClass(/dark/);
    
    // Check localStorage again
    const themeAfter = await page.evaluate(() => localStorage.getItem('theme'));
    expect(themeAfter).toBe('light');
  });

  test('should persist dark mode on page reload', async ({ page }) => {
    // Navigate to the home page
    await page.goto('/');
    
    // Enable dark mode
    const themeToggle = page.locator('[data-theme-toggle]').first();
    await themeToggle.click();
    await page.waitForTimeout(100);
    
    // Reload the page
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    // Check that dark mode is still active
    const htmlElement = page.locator('html');
    await expect(htmlElement).toHaveClass(/dark/);
  });

  test('should work on mobile view', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Navigate to the home page
    await page.goto('/');
    
    // The mobile theme toggle should be visible
    const mobileThemeToggle = page.locator('[data-theme-toggle]').nth(1);
    await expect(mobileThemeToggle).toBeVisible();
    
    // Click the mobile toggle
    await mobileThemeToggle.click();
    await page.waitForTimeout(100);
    
    // Check that dark mode is active
    const htmlElement = page.locator('html');
    await expect(htmlElement).toHaveClass(/dark/);
  });
});