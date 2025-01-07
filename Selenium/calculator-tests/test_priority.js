const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

describe('Operator Priority Test', function () {
    this.timeout(10000); // Timeout für alle Tests auf 10 Sekunden setzen

    let driver;

    before(async function () {
        driver = new Builder().forBrowser('chrome').build();
    });

    after(async function () {
        await driver.quit();
    });

    it('should respect operator precedence without parentheses', async function () {
        await driver.get('https://seleniumbase.io/apps/calculator');
        await driver.findElement(By.id('2')).click();
        await driver.sleep(500);
        await driver.findElement(By.id('add')).click();
        await driver.sleep(500);
        await driver.findElement(By.id('3')).click();
        await driver.sleep(500);
        await driver.findElement(By.id('multiply')).click();
        await driver.sleep(500);
        await driver.findElement(By.id('4')).click();
        await driver.sleep(500);
        await driver.findElement(By.id('subtract')).click();
        await driver.sleep(500);
        await driver.findElement(By.id('6')).click();
        await driver.sleep(500);
        await driver.findElement(By.id('divide')).click();
        await driver.sleep(500);
        await driver.findElement(By.id('2')).click();
        await driver.sleep(500);
        await driver.findElement(By.id('equal')).click();

        const result = await driver.findElement(By.id('output')).getAttribute('value');
        assert.strictEqual(result, '12');
    });

    it('should respect operator precedence with parentheses', async function () {
        await driver.get('https://seleniumbase.io/apps/calculator');
        await driver.findElement(By.id('(')).click();
        await driver.sleep(500);
        await driver.findElement(By.id('2')).click();
        await driver.sleep(500);
        await driver.findElement(By.id('add')).click();
        await driver.sleep(500);
        await driver.findElement(By.id('3')).click();
        await driver.sleep(500);
        await driver.findElement(By.id(')')).click();
        await driver.sleep(500);
        await driver.findElement(By.id('multiply')).click();
        await driver.sleep(500);
        await driver.findElement(By.id('(')).click();
        await driver.sleep(500);
        await driver.findElement(By.id('4')).click();
        await driver.sleep(500);
        await driver.findElement(By.id('subtract')).click();
        await driver.sleep(500);
        await driver.findElement(By.id('6')).click();
        await driver.sleep(500);
        await driver.findElement(By.id('divide')).click();
        await driver.sleep(500);
        await driver.findElement(By.id('2')).click();
        await driver.sleep(500);
        await driver.findElement(By.id(')')).click();
        await driver.sleep(500);
        await driver.findElement(By.id('equal')).click();

        const result = await driver.findElement(By.id('output')).getAttribute('value');
        assert.strictEqual(result, '5');
    });
});
