const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

describe('Division by Zero Test', function () {
    let driver;

    before(async function () {
        driver = new Builder().forBrowser('chrome').build();
    });

    after(async function () {
        await driver.quit();
    });

    it('should display Error for division by zero', async function () {
        await driver.get('https://seleniumbase.io/apps/calculator');
        await driver.findElement(By.id('8')).click();
        await driver.findElement(By.id('divide')).click();
        await driver.findElement(By.id('0')).click();
        await driver.findElement(By.id('equal')).click();

        const result = await driver.findElement(By.id('output')).getAttribute('value');
        assert.strictEqual(result, 'Error');
    });
});
