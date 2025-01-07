const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

describe('Addition Test', function () {
    let driver;

    before(async function () {
        driver = new Builder().forBrowser('chrome').build();
    });

    after(async function () {
        await driver.quit();
    });

    it('should correctly calculate 5 + 3', async function () {
        await driver.get('https://seleniumbase.io/apps/calculator');
        await driver.findElement(By.id('5')).click();
        await driver.findElement(By.id('add')).click();
        await driver.findElement(By.id('3')).click();
        await driver.findElement(By.id('equal')).click();

        const result = await driver.findElement(By.id('output')).getAttribute('value');
        assert.strictEqual(result, '8');
    });
});
