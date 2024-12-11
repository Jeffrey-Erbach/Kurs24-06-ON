// tests/demoPage.test.js
import { Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import { assert } from 'chai';
import DemoPage from '../pageObjects/DemoPage.js';

describe("E2E Test für Demo Page", function () {
    let driver;
    let demoPage;

    // Erhöhe das Timeout, da Browser-Starts und Seitenladungen Zeit benötigen können
    this.timeout(60000);

    before(async function () {
        try {
            console.log("Starte den Browser...");
            const options = new chrome.Options();
            // Entferne den Headless-Modus, um den Browser sichtbar zu machen
            // options.headless(); 
            options.addArguments('--no-sandbox');
            options.addArguments('--disable-dev-shm-usage');
            driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();
            console.log("Browser gestartet.");
            demoPage = new DemoPage(driver);
            console.log("Öffne die Demo-Seite...");
            await demoPage.open();
            console.log("Demo-Seite geöffnet.");
        } catch (error) {
            console.error("Fehler im before Hook:", error);
            throw error;
        }
    });

    after(async function () {
        try {
            if (driver) {
                console.log("Schließe den Browser...");
                await driver.quit();
                console.log("Browser geschlossen.");
            }
        } catch (error) {
            console.error("Fehler im after Hook:", error);
            throw error;
        }
    });

    it("Aufgabe 1: Hauptüberschrift finden", async function () {
        console.log("Teste die Hauptüberschrift...");
        const headerText = await demoPage.getHeaderText();
        assert.strictEqual(headerText, "Demo Page", "Hauptüberschrift stimmt nicht überein.");
        console.log("Hauptüberschrift erfolgreich überprüft.");
    });

    it("Aufgabe 2: Formular mit ungültigen Daten testen", async function () {
        console.log("Teste das Formular mit ungültigen Daten...");
        await demoPage.fillForm('', 'invalid-email');

        const errorMessage = await demoPage.getFormError();
        assert.strictEqual(errorMessage, "Please enter a valid email address.", "Fehlermeldung stimmt nicht überein.");
        console.log("Fehlermeldung erfolgreich überprüft.");
    });
});
