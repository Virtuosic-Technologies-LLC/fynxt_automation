import { type Page, type Locator, expect } from '@playwright/test';

export class LoginPagePO {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  readonly errorCallout: Locator;
  readonly signingInText: Locator;

  constructor(private readonly page: Page) {
    this.emailInput = page.locator('input[type="email"]').first();
    this.passwordInput = page.locator('input[type="password"]').first();
    this.signInButton = page.getByText('Sign in', { exact: true });
    this.errorCallout = page.locator('[class*="callout"]');
    this.signingInText = page.getByText('Signing in…');
  }

  async goto() {
    await this.page.goto('http://3.129.154.1:8000');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickSignIn() {
    await this.signInButton.click();
  }

  async login(email: string, password: string) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickSignIn();
  }

  async assertErrorVisible(message: string | RegExp) {
    await expect(this.errorCallout).toBeVisible();
    await expect(this.errorCallout).toContainText(message);
  }

  async assertSigningInState() {
    await expect(this.signingInText).toBeVisible();
  }

  async assertSignInButtonDisabled() {
    await expect(this.signInButton).toBeDisabled();
  }
}