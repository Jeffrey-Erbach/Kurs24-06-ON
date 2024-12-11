// pageObjects/DemoPage.js
import { By, until } from 'selenium-webdriver';

class DemoPage {
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://seleniumbase.io/demo_page';
    }

    async open() {
        console.log("Navigiere zur Demo-Seite...");
        await this.driver.get(this.url);
        await this.driver.wait(until.titleContains("Demo Page"), 10000);
        console.log("Demo-Seite geöffnet.");
    }

    async getHeaderText() {
        console.log("Finde die Hauptüberschrift...");
        const header = await this.driver.wait(until.elementLocated(By.xpath("//h1[text()='Demo Page']")), 10000);
        return await header.getText();
    }

    async fillForm(name, email) {
        console.log("Fülle das Formular aus...");
        const nameField = await this.driver.wait(until.elementLocated(By.id('myTextField')), 10000);
        const emailField = await this.driver.wait(until.elementLocated(By.id('myEmailField')), 10000);
        const submitButton = await this.driver.wait(until.elementLocated(By.id('submitButton')), 10000);

        await nameField.clear();
        await nameField.sendKeys(name);

        await emailField.clear();
        await emailField.sendKeys(email);

        await submitButton.click();
        console.log("Formular abgesendet.");
    }

    async getFormError() {
        console.log("Suche nach Fehlermeldung...");
        const error = await this.driver.wait(until.elementLocated(By.id('errorMessage')), 10000);
        return await error.getText();
    }

    async getSuccessMessage() {
        console.log("Suche nach Erfolgsmeldung...");
        const success = await this.driver.wait(until.elementLocated(By.id('successMessage')), 10000);
        return await success.getText();
    }
}

export default DemoPage;
