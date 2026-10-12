import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('renders all projects and local images without application errors', async ({
  page,
}) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  const failedRequests = [];
  page.on('response', (response) => {
    if (response.status() >= 400) failedRequests.push(response.url());
  });
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: 'Louis Copmartin.', level: 1 }),
  ).toBeVisible();
  await expect(page.locator('.project-card, .project-row')).toHaveCount(5);
  await expect(page.locator('.skill-list li')).toHaveCount(14);
  await page.locator('#skills').scrollIntoViewIfNeeded();
  await page.waitForFunction(() =>
    [...document.images]
      .filter((image) => image.getBoundingClientRect().top < innerHeight)
      .every((image) => image.complete && image.naturalWidth > 0),
  );
  expect(errors).toEqual([]);
  expect(failedRequests).toEqual([]);
});

test('filters the projects and restores the complete selection', async ({
  page,
}) => {
  await page.goto('/#projects');
  await page.getByRole('button', { name: 'Web', exact: true }).click();
  await expect(page.locator('.project-card, .project-row')).toHaveCount(2);
  await expect(
    page.getByRole('link', { name: 'Découvrir le projet : RoboSoccer' }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Découvrir le projet : BananaW' }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'IA', exact: true }).click();
  await expect(page.locator('.project-card, .project-row')).toHaveCount(1);
  await expect(
    page.getByRole('link', { name: 'Découvrir le projet : Towa AI' }),
  ).toBeVisible();
  await expect(page.locator('.project-count')).toHaveText('01 projet');
  await page.getByRole('button', { name: 'Tous', exact: true }).click();
  await expect(page.locator('.project-card, .project-row')).toHaveCount(5);
});

test('opens details, navigates projects and closes with Escape', async ({
  page,
}) => {
  await page.goto('/#projects');
  const opener = page.getByRole('link', {
    name: 'Découvrir le projet : RoboSoccer',
  });
  await opener.click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole('heading', { name: 'RoboSoccer', exact: true }),
  ).toBeVisible();
  await expect(
    dialog.getByRole('link', { name: 'Voir le code sur GitLab' }),
  ).toHaveAttribute(
    'href',
    'https://gitlab-ce.iut.u-bordeaux.fr/matjay/saes3.01',
  );
  await dialog.getByRole('button', { name: /Projet suivant/ }).click();
  await expect(
    dialog.getByRole('heading', { name: 'Carbon', exact: true }),
  ).toBeVisible();
  await expect(page).toHaveURL(/#project\/carbon$/);
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
  await expect(opener).toBeFocused();
});

test('supports direct links and browser back navigation', async ({ page }) => {
  await page.goto('/#project/rsa');
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(
    page
      .getByRole('dialog')
      .getByRole('heading', { name: 'Mini RSA', exact: true }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Fermer le projet' }).click();
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await page
    .getByRole('link', { name: 'Découvrir le projet : Towa AI' })
    .click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.goBack();
  await expect(page.getByRole('dialog')).not.toBeVisible();
});

test('changes language and persists the choice on reload', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Switch to English' }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(
    page.getByRole('heading', { name: 'Ideas into reality.' }),
  ).toBeVisible();
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await page
    .getByRole('link', { name: 'Explore the project : Carbon' })
    .click();
  await expect(
    page.getByRole('dialog').getByRole('heading', { name: 'What I learned' }),
  ).toBeVisible();
});

test('retains the original project URLs after migration', async ({ page }) => {
  await page.goto('/projects/DVS/dvs.html');
  await expect(page).toHaveURL(/index\.html#project\/carbon$/);
  await expect(
    page
      .getByRole('dialog')
      .getByRole('heading', { name: 'Carbon', exact: true }),
  ).toBeVisible();
});

test('has no horizontal overflow in either language at narrow and wide widths', async ({
  page,
}) => {
  await page.goto('/');
  for (const width of [320, 375, 390, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    for (let language = 0; language < 2; language++) {
      const overflow = await page.evaluate(
        () =>
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth,
      );
      expect(overflow, `Overflow at ${width}px`).toBe(false);
      await page.locator('.language-switch').click();
    }
  }
});

test('meets accessibility checks on the page and project dialog', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const result = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();
  expect(result.violations).toEqual([]);
  await page
    .getByRole('link', { name: 'Découvrir le projet : RoboSoccer' })
    .click();
  const dialogResult = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();
  expect(dialogResult.violations).toEqual([]);
});

test('supports reduced motion and mobile menu navigation', async ({
  page,
  isMobile,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe('auto');
  if (isMobile) {
    const toggle = page.getByRole('button', { name: 'Ouvrir le menu' });
    await toggle.click();
    await expect(page.locator('#main-navigation')).toBeVisible();
    await page
      .getByRole('navigation', { name: 'Navigation principale' })
      .getByRole('link', { name: /Compétences/ })
      .click();
    await expect(page.locator('#main-navigation')).not.toBeVisible();
    await expect(page).toHaveURL(/#skills$/);
  }
});
