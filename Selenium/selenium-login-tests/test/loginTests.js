const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const mocha = require('mocha');

const { describe, it, before, after } = mocha;

describe('Login-Tests mit Selenium, Mocha und Node.js', function () {
  this.timeout(30000); // Erhöhe das Timeout auf 30 Sekunden

  let driver;
  const signupUrl = 'https://seleniumbase.io/simple/signup';
  const loginUrl = 'https://seleniumbase.io/simple/login';

  // Testdaten
  const testUser = {
    username: 'deinBenutzername', // Ersetze durch den tatsächlichen Benutzernamen
    password: 'deinPasswort',     // Ersetze durch das tatsächliche Passwort
  };

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function () {
    if (driver) {
      await driver.quit();
    }
  });

  it('1. Erfolgreicher Login: Überprüfung der korrekten Weiterleitung', async function () {
    await driver.get(loginUrl);

    // Eingabe des Benutzernamens
    const usernameField = await driver.findElement(By.id('username'));
    await usernameField.sendKeys(testUser.username);

    // Eingabe des Passworts
    const passwordField = await driver.findElement(By.id('password'));
    await passwordField.sendKeys(testUser.password);

    // Klicken auf den Anmelden-Button
    const loginButton = await driver.findElement(By.id('login-button'));
    await loginButton.click();

    // Überprüfen der Weiterleitung
    await driver.wait(until.urlIs('https://seleniumbase.io/simple/dashboard'), 10000);
    const currentUrl = await driver.getCurrentUrl();
    assert.strictEqual(currentUrl, 'https://seleniumbase.io/simple/dashboard');
  });

  it('2. Ungültige Anmeldedaten: Testen von nicht existierenden Benutzername/Passwort-Kombinationen', async function () {
    await driver.get(loginUrl);

    // Eingabe eines ungültigen Benutzernamens
    const usernameField = await driver.findElement(By.id('username'));
    await usernameField.sendKeys('ungültigerBenutzer');

    // Eingabe eines ungültigen Passworts
    const passwordField = await driver.findElement(By.id('password'));
    await passwordField.sendKeys('ungültigesPasswort');

    // Klicken auf den Anmelden-Button
    const loginButton = await driver.findElement(By.id('login-button'));
    await loginButton.click();

    // Überprüfen der Fehlermeldung
    const errorMessage = await driver.findElement(By.id('error-message')).getText();
    assert.strictEqual(errorMessage, 'Ungültiger Benutzername oder Passwort.');
  });

  it('3. Leere Felder: Validierung von Fehlermeldungen bei nicht ausgefüllten Feldern', async function () {
    await driver.get(loginUrl);

    // Klicken auf den Anmelden-Button ohne Eingabe von Benutzernamen und Passwort
    const loginButton = await driver.findElement(By.id('login-button'));
    await loginButton.click();

    // Überprüfen der Fehlermeldungen
    const usernameError = await driver.findElement(By.id('username-error')).getText();
    const passwordError = await driver.findElement(By.id('password-error')).getText();

    assert.strictEqual(usernameError, 'Benutzername ist erforderlich.');
    assert.strictEqual(passwordError, 'Passwort ist erforderlich.');
  });
});
