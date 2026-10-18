import { test, expect } from '@playwright/test';

const route = '/sermons/ambient-bible-immersion';

test.describe('Ambient Bible Immersion', () => {
  test('shows the full English outline and resource links', async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole('heading', { level: 1 })).toHaveAccessibleName('Ambient Bible Immersion');
    await expect(page.getByRole('heading', { name: 'Resources', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Sermon outline', exact: true })).toBeVisible();
    const languageSelector = await page.getByRole('tablist').boundingBox();
    const title = await page.getByRole('heading', { level: 1 }).boundingBox();
    expect(languageSelector!.y).toBeLessThan(title!.y + title!.height);
    await expect(page.getByRole('link', { name: "Professor Horner's Bible Reading System" })).toHaveAttribute(
      'href',
      'https://bethelpreschurch.org/wp-content/uploads/2018/05/Professor_Horner_s_Bible_Reading_Plan.pdf',
    );
    await expect(page.getByRole('link', { name: 'YouVersion Bible App' })).toHaveAttribute('href', 'https://www.bible.com/app');
    await expect(page.getByRole('tab', { name: 'English', exact: true })).toHaveAttribute('aria-selected', 'true');
    await expect(page.locator('#outline-en')).toBeVisible();
    await expect(page.locator('#outline-ru')).toBeHidden();
    await expect(page.locator('#outline-en h3')).toHaveCount(6);
    await expect(page.locator('#outline-en')).toContainText(/Let['\u2019]s pray\./);
    await expect(page.locator('#outline-en')).toContainText('Epistle to Leander, IV');
  });

  test('switches languages with mouse and keyboard and preserves the selection on reload', async ({ page }) => {
    await page.goto(route);
    const english = page.getByRole('tab', { name: 'English', exact: true });
    const russian = page.getByRole('tab', { name: 'Русский', exact: true });
    await russian.click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveAccessibleName('Ежедневное погружение в Библию');
    await expect(page.getByRole('heading', { name: 'Материалы', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Конспект проповеди', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Система чтения Библии профессора Хорнера', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Библейское приложение YouVersion', exact: true })).toBeVisible();
    await expect(page.getByText('План, инструкции и десять списков для чтения.', { exact: false })).toBeVisible();
    await expect(page.getByText('Читайте или слушайте Библию и выберите план чтения.', { exact: true })).toBeVisible();
    await expect(page.locator('html')).toHaveAttribute('lang', 'ru');
    await expect(page.locator('body > header')).toHaveCount(0);
    await expect(page.locator('body > footer')).toHaveAttribute('lang', 'en');
    await expect(page).toHaveTitle('Ежедневное погружение в Библию - Andrew Shindyapin');
    await expect(russian).toHaveAttribute('aria-selected', 'true');
    await expect(page.locator('#outline-en')).toBeHidden();
    await expect(page.locator('#outline-ru')).toBeVisible();
    await expect(page.locator('#outline-ru')).toHaveAttribute('lang', 'ru');
    await expect(page.locator('#outline-ru h3')).toHaveCount(6);
    await expect(page.locator('#outline-ru')).toContainText('Давайте помолимся.');
    await expect(page).toHaveURL(/\?lang=ru/);
    await page.reload();
    await expect(russian).toHaveAttribute('aria-selected', 'true');
    await russian.focus();
    await page.keyboard.press('ArrowLeft');
    await expect(english).toBeFocused();
    await expect(english).toHaveAttribute('aria-selected', 'true');
    await expect(page.locator('#outline-en')).toBeVisible();
    await expect(page.getByRole('heading', { level: 1 })).toHaveAccessibleName('Ambient Bible Immersion');
    await expect(page.getByRole('heading', { name: 'Resources', exact: true })).toBeVisible();
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await page.keyboard.press('End');
    await expect(russian).toBeFocused();
    await expect(page.locator('#outline-ru')).toBeVisible();
  });

  test('supports Russian deep links and invalid language defaults', async ({ page }) => {
    await page.goto(`${route}?lang=ru`);
    await expect(page.locator('#outline-ru')).toBeVisible();
    await page.goto(`${route}?lang=unknown`);
    await expect(page.locator('#outline-en')).toBeVisible();
  });

  test('keeps both outlines readable without JavaScript', async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto(`http://localhost:4322${route}`);
    await expect(page.locator('#outline-en')).toBeVisible();
    await expect(page.locator('#outline-ru')).toBeVisible();
    await context.close();
  });

  test('fits a narrow screen in both languages and dark mode', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(route);
    for (const language of ['English', 'Русский']) {
      await page.getByRole('tab', { name: language, exact: true }).click();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    }
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.reload();
    await expect(page.locator('html')).toHaveClass(/dark/);
    await expect(page.locator('#outline-ru')).toBeVisible();
  });

  test('prints readable resource colors from dark mode', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto(route);
    await expect(page.locator('html')).toHaveClass(/dark/);
    await page.emulateMedia({ media: 'print' });
    await expect(page.locator('.resource-list a').first()).toHaveCSS('color', 'rgb(34, 34, 34)');
    await expect(page.locator('.resource-list p').first()).toHaveCSS('color', 'rgb(51, 51, 51)');
    await expect(page.getByRole('tablist')).toBeHidden();
  });

  test('hides the sermon header and links every footer to the homepage', async ({ page }) => {
    for (const path of [route, '/sermons', '/sermons/', '/', '/about/', '/contact/']) {
      await page.goto(path);
      await expect(page.locator('body > header')).toHaveCount(path.startsWith('/sermons') ? 0 : 1);
      await expect(page.locator('footer').getByRole('link', { name: 'Andrew Shindyapin', exact: true })).toHaveAttribute(
        'href', 'https://andrew.shindyapin.com/',
      );
    }
  });

  test('lists the sermon on the index', async ({ page }) => {
    const response = await page.goto('/sermons');
    expect(response?.status()).toBe(200);
    await expect(page.getByRole('heading', { name: 'Sermons', exact: true })).toBeVisible();
    await expect(page.locator('main li')).toHaveCount(1);
    await page.getByRole('link', { name: 'Ambient Bible Immersion', exact: true }).click();
    await expect(page).toHaveURL(/\/sermons\/ambient-bible-immersion\/$/);
    await expect(page.locator('#outline-en')).toBeVisible();
  });
});
