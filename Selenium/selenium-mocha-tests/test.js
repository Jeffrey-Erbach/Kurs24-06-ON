const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");
const assert = require("assert");

// Erstelle eine Instanz des Chromedriver-ServiceBuilder
const service = new chrome.ServiceBuilder(chromedriver.path);
console.log("Chromedriver Pfad:", chromedriver.path);

// Optional: Füge Chrome-Optionen hinzu (z.B. Headless-Modus)
const options = new chrome.Options();
// options.addArguments('--headless'); // Optional: Browser im Headless-Modus starten

describe("Professionelle Tests mit Selenium und Mocha", function () {
    let driver;

    // Erhöhe das Timeout, da Browser-Interaktionen länger dauern können
    this.timeout(30000);

    // Setup: Browser starten und zur Demo-Seite navigieren
    before(async function () {
        console.log("Starte den Browser...");
        driver = await new Builder()
            .forBrowser("chrome")
            .setChromeOptions(options)
            .setChromeService(service) // Übergebe die ServiceBuilder-Instanz direkt
            .build();
        console.log("Navigiere zur Demo-Seite...");
        await driver.get("https://seleniumbase.io/demo_page");
        console.log("Seite geladen.");
    });

    // Teardown: Browser schließen nach einer 10-Sekunden-Verzögerung
    after(async function () {
        if (driver) {
            console.log("Warte 10 Sekunden, bevor der Browser geschlossen wird...");
            await new Promise(resolve => setTimeout(resolve, 10000)); // 10 Sekunden warten
            console.log("Schließe den Browser...");
            await driver.quit();
            console.log("Browser geschlossen.");
        }
    });

    /**
     * Aufgabe 2: Dropdown-Option auswählen 
     */
    it("Aufgabe 2: Dropdown-Option auswählen", async function () {
        console.log("Starte Testfall: Dropdown-Option auswählen");
        // Dropdown-Button finden
        const dropdownButton = await driver.findElement(By.id("myDropdown"));
        
        // Maus über das Dropdown-Menü bewegen
        const actions = driver.actions({ async: true });
        await actions.move({ origin: dropdownButton }).perform();
        console.log("Maus über das Dropdown-Menü bewegt.");
        
        // Option "Link One" auswählen
        const dropdownOption = await driver.findElement(By.id("dropOption1"));
        await dropdownOption.click();
        console.log("Option 'Link One' ausgewählt.");
        
        // Überprüfen, ob "Link One Selected" angezeigt wird
        const header = await driver.findElement(By.tagName("h3"));
        const headerText = await header.getText();
        assert.strictEqual(headerText, "Link One Selected", "Die Überschrift ist nicht korrekt!");
        console.log("Überprüfung der Überschrift erfolgreich.");
    });

    /**
     * Aufgabe 3: Textfeld ausfüllen (33.33 Punkte)
     */
    it("Aufgabe 3: Textfeld ausfüllen", async function () {
        console.log("Starte Testfall: Textfeld ausfüllen");
        // Textfeld finden
        const textField = await driver.findElement(By.id("myTextInput"));
        
        // Text eingeben
        const inputText = "Automatisierter Test";
        await textField.sendKeys(inputText);
        console.log(`Text '${inputText}' in das Textfeld eingegeben.`);
        
        // Überprüfen, ob der eingegebene Text korrekt ist
        const value = await textField.getAttribute("value");
        assert.strictEqual(value, inputText, "Der eingegebene Text ist nicht korrekt!");
        console.log("Überprüfung des eingegebenen Textes erfolgreich.");
    });

    /**
     * Aufgabe 4: Button klicken 
     */
    it("Aufgabe 4: Button klicken", async function () {
        console.log("Starte Testfall: Button klicken");
        // Button finden
        const button = await driver.findElement(By.id("myButton"));
        
        // Button klicken
        await button.click();
        console.log("Button geklickt.");
        
        // Überprüfen, ob der Buttontext zu "Click Me (Purple)" gewechselt hat
        const buttonText = await button.getText();
        assert.strictEqual(buttonText, "Click Me (Purple)", "Der Buttontext hat sich nicht geändert!");
        console.log("Überprüfung des Buttontexts erfolgreich.");
    });
});
