// simpleTest.js
import { Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

async function simpleTest() {
    let driver;
    try {
        console.log("Starte den Browser...");
        const options = new chrome.Options();
        // Entferne den Headless-Modus, um den Browser sichtbar zu machen
        // options.headless(); 
        driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();
        console.log("Browser gestartet.");
        await driver.get("https://www.google.com");
        const title = await driver.getTitle();
        console.log("Seitentitel:", title);
    } catch (error) {
        console.error("Fehler beim einfachen Test:", error);
    } finally {
        if (driver) {
            await driver.quit();
            console.log("Browser geschlossen.");
        }
    }
}

simpleTest();
