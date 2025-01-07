const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

describe('Multiplication Test', function () {
    let driver;

    before(async function () {
        driver = new Builder().forBrowser('chrome').build();
    });

    after(async function () {
        await driver.quit();
    });

    it('should correctly calculate 7 × 4', async function () {
        await driver.get('https://seleniumbase.io/apps/calculator');
        await driver.findElement(By.id('7')).click();
        await driver.findElement(By.id('multiply')).click();
        await driver.findElement(By.id('4')).click();
        await driver.findElement(By.id('equal')).click();

        const result = await driver.findElement(By.id('output')).getAttribute('value');
        assert.strictEqual(result, '28');
    });
});
