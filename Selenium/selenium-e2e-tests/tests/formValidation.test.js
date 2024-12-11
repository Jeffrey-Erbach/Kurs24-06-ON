// tests/formValidation.test.js
import { Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import { assert } from 'chai';
import DemoPage from '../pageObjects/DemoPage.js';

describe("Formularvalidierung auf der Demo Page", function () {
    let driver;
    let demoPage;

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

    it("Sollte Fehlermeldung bei leeren Feldern anzeigen", async function () {
        console.log("Teste Fehlermeldung bei leeren Feldern...");
        await demoPage.fillForm('', '');

        const errorMessage = await demoPage.getFormError();
        assert.strictEqual(errorMessage, "All fields are required.", "Fehlermeldung für leere Felder stimmt nicht überein.");
        console.log("Fehlermeldung für leere Felder erfolgreich überprüft.");
    });

    it("Sollte Fehlermeldung bei ungültiger E-Mail anzeigen", async function () {
        console.log("Teste Fehlermeldung bei ungültiger E-Mail...");
        await demoPage.fillForm('John Doe', 'john.doe@invalid');

        const errorMessage = await demoPage.getFormError();
        assert.strictEqual(errorMessage, "Please enter a valid email address.", "Fehlermeldung für ungültige E-Mail stimmt nicht überein.");
        console.log("Fehlermeldung für ungültige E-Mail erfolgreich überprüft.");
    });

    it("Sollte erfolgreich absenden mit gültigen Daten", async function () {
        console.log("Teste erfolgreiches Absenden mit gültigen Daten...");
        await demoPage.fillForm('John Doe', 'john.doe@example.com');

        const successMessage = await demoPage.getSuccessMessage();
        assert.strictEqual(successMessage, "Form submitted successfully!", "Erfolgsmeldung stimmt nicht überein.");
        console.log("Erfolgsmeldung erfolgreich überprüft.");
    });
});
