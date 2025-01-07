const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

describe('Maximum Input Length Test', function () {
    this.timeout(10000); // Timeout für die gesamte Testgruppe erhöhen

    let driver;

    before(async function () {
        driver = new Builder().forBrowser('chrome').build();
    });

    after(async function () {
        await driver.quit();
    });

    it('should handle long input gracefully', async function () {
        await driver.get('https://seleniumbase.io/apps/calculator');

        // Eingabe der ersten langen Zahl
        const longNumber1 = '12345678901234567890';
        for (const char of longNumber1) {
            await driver.findElement(By.id(char)).click();
        }

        // Plus-Operator hinzufügen
        await driver.findElement(By.id('add')).click();

        // Eingabe der zweiten langen Zahl
        const longNumber2 = '98765432109876543210';
        for (const char of longNumber2) {
            await driver.findElement(By.id(char)).click();
        }

        // Gleichheitszeichen klicken
        await driver.findElement(By.id('equal')).click();

        // Ergebnis prüfen
        const result = await driver.findElement(By.id('output')).getAttribute('value');
        console.log(`Result: ${result}`); // Debugging

        // Erwartetes Ergebnis als Näherung prüfen
        const expected = '111111111011111111100';
        const isResultValid = result.startsWith(expected.substring(0, 15)); // Nur die ersten 15 Stellen vergleichen

        assert.ok(isResultValid, `Unexpected result: ${result}`);
    });
});
