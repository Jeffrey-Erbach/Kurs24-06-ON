// selenium-test.js

// Importiere benötigte Module aus selenium-webdriver
const { Builder, By, until } = require("selenium-webdriver");
// Importiere das Chrome-spezifische Modul für Optionen
const chrome = require("selenium-webdriver/chrome");
// Importiere das 'fs' Modul zum Arbeiten mit dem Dateisystem, z.B. für Screenshots
const fs = require('fs'); // Für Screenshots bei Fehlern

// Definiere eine asynchrone Funktion, die alle Tests ausführt
(async function runAllTests() {
    // Erstelle eine neue Instanz von Chrome-Optionen
    let options = new chrome.Options();
    // Optional: Aktiviere den Headless-Modus, sodass der Browser ohne UI läuft
    // options = options.headless();

    // Baue den WebDriver für den Chrome-Browser mit den definierten Optionen
    let driver = await new Builder()
        .forBrowser("chrome")          // Wähle den Chrome-Browser
        .setChromeOptions(options)     // Setze die definierten Chrome-Optionen
        .build();                      // Erstelle die WebDriver-Instanz

    try {
        // Navigiere zur angegebenen URL
        await driver.get("https://seleniumbase.io/demo_page");
        console.log("Seite geladen: https://seleniumbase.io/demo_page");

        // -----------------------------
        // Aufgabe 1: Hauptüberschrift finden
        // -----------------------------
        console.log("Aufgabe 1: Hauptüberschrift finden");
        // Finde das h1-Element mit dem exakten Text 'Demo Page'
        const header = await driver.findElement(By.xpath("//h1[text()='Demo Page']"));
        // Gib den gefundenen Text der Überschrift in der Konsole aus
        console.log("Gefundene Überschrift:", await header.getText());

        // -----------------------------
        // Aufgabe 2: Dropdown-Menü
        // -----------------------------
        console.log("Aufgabe 2: Dropdown-Menü");
        try {
            // Logge die Suche nach dem Dropdown-Button mit der ID 'myDropdown'
            console.log("Suche nach dem Dropdown-Button mit ID 'myDropdown'...");
            // Warte darauf, dass das Element mit der ID 'myDropdown' innerhalb von 10 Sekunden gefunden wird
            const dropdownButton = await driver.wait(
                until.elementLocated(By.id("myDropdown")),
                10000,
                "Dropdown-Button mit ID 'myDropdown' nicht gefunden"
            );
            // Logge das gefundene Dropdown-Button-Element (HTML)
            console.log("Dropdown-Button gefunden:", await dropdownButton.getAttribute("outerHTML"));

            // Überprüfe, ob das Dropdown-Button-Element sichtbar ist
            console.log("Überprüfe, ob der Dropdown-Button sichtbar ist...");
            await driver.wait(until.elementIsVisible(dropdownButton), 5000);
            console.log("Dropdown-Button ist sichtbar.");

            // Bewege die Maus über das Dropdown-Button-Element, falls erforderlich (z.B. für Hover-Effekte)
            console.log("Bewege Maus über den Dropdown-Button (falls erforderlich)...");
            await driver.actions().move({ origin: dropdownButton }).perform();
            console.log("Maus über Dropdown-Button bewegt.");

            // Suche nach der spezifischen Dropdown-Option mit dem Text 'Link One'
            console.log("Suche nach der Dropdown-Option 'Link One'...");
            const dropdownOption = await driver.wait(
                until.elementLocated(By.xpath("//a[text()='Link One']")),
                10000,
                "Dropdown-Option 'Link One' nicht gefunden"
            );
            // Logge das gefundene Dropdown-Option-Element (HTML)
            console.log("Dropdown-Option gefunden:", await dropdownOption.getAttribute("outerHTML"));

            // Klicke auf die gefundene Dropdown-Option 'Link One'
            console.log("Klicke auf die Dropdown-Option 'Link One'...");
            await dropdownOption.click();
            console.log("Dropdown-Option 'Link One' ausgewählt.");
        } catch (error) {
            // Falls ein Fehler auftritt, logge den Fehler und mache einen Screenshot
            console.error("Aufgabe 2: Dropdown-Menü - Ein Fehler ist aufgetreten:", error);
            // Nimm einen Screenshot auf und speichere ihn als 'error_dropdown.png'
            let screenshot = await driver.takeScreenshot();
            fs.writeFileSync('error_dropdown.png', screenshot, 'base64');
        }

        // -----------------------------
        // Aufgabe 3: Textfeld ausfüllen
        // -----------------------------
        console.log("Aufgabe 3: Textfeld auswählen");
        // Finde das Eingabefeld mit der ID 'myTextInput'
        const textField = await driver.findElement(By.xpath("//input[@id='myTextInput']"));
        // Füge den Text "Automatisierter Test" in das gefundene Textfeld ein
        await textField.sendKeys("Automatisierter Test");
        console.log("Textfeld mit Text gefüllt.");

        // -----------------------------
        // Aufgabe 4: Button klicken
        // -----------------------------
        console.log("Aufgabe 4: Button klicken");
        // Finde den Button mit dem exakten Text 'Click Me (Green)'
        const button = await driver.findElement(By.xpath("//button[text()='Click Me (Green)']"));
        // Klicke auf den gefundenen Button
        await button.click();
        console.log("Button geklickt.");

        // -----------------------------
        // Aufgabe 5: Checkboxen auswählen
        // -----------------------------
        console.log("Aufgabe 5: Checkboxen auswählen");
        // Finde alle Checkbox-Elemente auf der Seite
        const checkboxes = await driver.findElements(By.xpath("//input[@type='checkbox']"));
        // Iteriere über jede gefundene Checkbox
        for (const checkbox of checkboxes) {
            // Wenn die Checkbox noch nicht ausgewählt ist, klicke sie an
            if (!(await checkbox.isSelected())) {
                await checkbox.click();
            }
        }
        console.log("Alle Checkboxen ausgewählt.");

        // -----------------------------
        // Aufgabe 6: Slider steuern
        // -----------------------------
        console.log("Aufgabe 6: Slider steuern");
        // Finde den Slider mit dem Typ 'range'
        const slider = await driver.findElement(By.xpath("//input[@type='range']"));
        // Setze den Wert des Sliders auf 75 mittels JavaScript
        await driver.executeScript("arguments[0].value = 75;", slider);
        // Optional: Triggert das 'change'-Event, falls die Anwendung darauf reagiert
        await driver.executeScript("arguments[0].dispatchEvent(new Event('change'));", slider);
        console.log("Slider auf Wert 75 gesetzt.");

        // -----------------------------
        // Aufgabe 7: Progress Bar Label finden
        // -----------------------------
        console.log("Aufgabe 7: Progress Bar");
        // Finde das Label mit der ID 'progressLabel'
        const progressBarLabel = await driver.findElement(By.xpath("//label[@id='progressLabel']"));
        // Logge den gefundenen Text des Progress Bar Labels
        console.log("Label gefunden:", await progressBarLabel.getText());

        // -----------------------------
        // Aufgabe 8: Link finden
        // -----------------------------
        console.log("Aufgabe 8: Links finden");
        try {
            // Warte darauf, dass der Link mit dem Text 'SeleniumBase on GitHub' gefunden wird
            const link = await driver.wait(
                until.elementLocated(By.xpath("//a[contains(text(), 'SeleniumBase on GitHub')]")),
                10000,
                "Link 'SeleniumBase on GitHub' nicht gefunden"
            );
            // Warte darauf, dass der gefundene Link sichtbar ist
            await driver.wait(
                until.elementIsVisible(link),
                10000,
                "Link 'SeleniumBase on GitHub' ist nicht sichtbar"
            );
            // Logge die 'href'-Eigenschaft des gefundenen Links
            console.log("Gefundener Link:", await link.getAttribute("href"));
        } catch (error) {
            // Falls ein Fehler auftritt, logge den Fehler und mache einen Screenshot
            console.error("Aufgabe 8: Links finden - Ein Fehler ist aufgetreten:", error);
            // Nimm einen Screenshot auf und speichere ihn als 'error_link.png'
            let screenshot = await driver.takeScreenshot();
            fs.writeFileSync('error_link.png', screenshot, 'base64');
        }

    } catch (error) {
        // Fange unerwartete Fehler ab, die außerhalb der spezifischen Aufgaben auftreten
        console.error("Ein unerwarteter Fehler ist aufgetreten:", error);
    } finally {
        // Beende die WebDriver-Instanz und schließe den Browser
        await driver.quit();
    }
})();
