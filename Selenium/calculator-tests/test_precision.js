const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

describe('Precision and Rounding Test', function () {
    this.timeout(10000); // Timeout für alle Tests erhöhen

    let driver;

    before(async function () {
        driver = new Builder().forBrowser('chrome').build();
    });

    after(async function () {
        await driver.quit();
    });

    it('should calculate 0.1 + 0.2 correctly', async function () {
        await driver.get('https://seleniumbase.io/apps/calculator');
        await driver.findElement(By.id('0')).click();
        await driver.findElement(By.id('.')).click();
        await driver.findElement(By.id('1')).click();
        await driver.findElement(By.id('add')).click();
        await driver.findElement(By.id('0')).click();
        await driver.findElement(By.id('.')).click();
        await driver.findElement(By.id('2')).click();
        await driver.findElement(By.id('equal')).click();

        const result = await driver.findElement(By.id('output')).getAttribute('value');
        assert.strictEqual(result, '0.3'); // Erwartetes Ergebnis prüfen
    });

    it('should calculate 1 ÷ 3 correctly', async function () {
        await driver.get('https://seleniumbase.io/apps/calculator');
        await driver.findElement(By.id('1')).click();
        await driver.findElement(By.id('divide')).click();
        await driver.findElement(By.id('3')).click();
        await driver.findElement(By.id('equal')).click();

        const result = await driver.findElement(By.id('output')).getAttribute('value');
        assert.match(result, /^0\.333333/, `Unexpected result: ${result}`); // Präzision prüfen
    });

    it('should handle 0.1 + 0.2 - 0.3 correctly', async function () {
        await driver.get('https://seleniumbase.io/apps/calculator');
        await driver.findElement(By.id('0')).click();
        await driver.findElement(By.id('.')).click();
        await driver.findElement(By.id('1')).click();
        await driver.findElement(By.id('add')).click();
        await driver.findElement(By.id('0')).click();
        await driver.findElement(By.id('.')).click();
        await driver.findElement(By.id('2')).click();
        await driver.findElement(By.id('subtract')).click();
        await driver.findElement(By.id('0')).click();
        await driver.findElement(By.id('.')).click();
        await driver.findElement(By.id('3')).click();
        await driver.findElement(By.id('equal')).click();

        const result = await driver.findElement(By.id('output')).getAttribute('value');
        assert.strictEqual(result, '0');
    });
});
