const { Builder, By, until } = require('selenium-webdriver');

async function testWarenkorbGesamtsummeMitDelay() {
    let driver = await new Builder().forBrowser('chrome').build();

    // Timer-Funktion definieren
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    try {
        // 1. Öffnen der Webseite
        await driver.get('https://seleniumbase.io/coffee/');
        console.log('Seite geöffnet: https://seleniumbase.io/coffee/');
        console.log('Warte 4 Sekunden...');
        await delay(4000); // Warte 4 Sekunden

        // 2. Hinzufügen der Artikel zum Warenkorb
        const artikel = [
            { name: 'Espresso', price: 10.00 },
            { name: 'Mocha', price: 8.00 },
            { name: 'Cappuccino', price: 19.00 }
        ];

        for (let item of artikel) {
            // Warten auf den Artikel-Button und klicken
            const artikelButton = await driver.wait(
                until.elementLocated(By.css(`div[data-test="${item.name}"]`)),
                10000 // Timeout auf 10 Sekunden
            );
            await artikelButton.click();
            console.log(`${item.name}-Button geklickt.`);
            console.log('Warte 6 Sekunden...');
            await delay(6000); // Warte 6 Sekunden nach dem Kauf des Kaffees
        }

        // 3. Öffnen des Warenkorbs
        const cartButton = await driver.wait(
            until.elementLocated(By.css('a[aria-label="Cart page"]')),
            5000
        );
        await cartButton.click();
        console.log('Warenkorb-Button geklickt.');
        console.log('Warte 8 Sekunden...');
        await delay(8000); // Warte 8 Sekunden

        // 4. Extrahieren der Preise aus dem Warenkorb
        // Annahme: Jede Produktzeile hat eine Klasse 'cart-item' und der Preis ist in einem Element mit Klasse 'item-price'
        await driver.wait(
            until.elementsLocated(By.css('.cart-item')),
            10000
        );
        console.log('Warte 8 Sekunden...');
        await delay(8000); // Warte 8 Sekunden

        const preiseElemente = await driver.findElements(By.css('.item-price'));

        let summe = 0.00;

        for (let preisElement of preiseElemente) {
            let preisText = await preisElement.getText(); // Beispiel: "$10.00"
            let preis = parseFloat(preisText.replace('$', ''));
            summe += preis;
            console.log(`Extrahierter Preis: $${preis.toFixed(2)}`);
            console.log('Warte 8 Sekunden...');
            await delay(8000); // Warte 8 Sekunden
        }

        console.log(`Berechnete Summe: $${summe.toFixed(2)}`);
        console.log('Warte 8 Sekunden...');
        await delay(8000); // Warte 8 Sekunden

        // 5. Verifizieren der Gesamtsumme
        const erwarteteSumme = 37.00;
        if (summe === erwarteteSumme) {
            console.log(`Erfolg: Die Gesamtsumme ist korrekt mit $${erwarteteSumme}.`);
        } else {
            console.error(`Fehler: Die Gesamtsumme ist $${summe}, erwartet wurden $${erwarteteSumme}.`);
        }
        console.log('Warte 8 Sekunden...');
        await delay(8000); // Warte 8 Sekunden

    } catch (error) {
        console.error('Fehler während des Testvorgangs:', error);
    } finally {
        // Schließen des Browsers
        console.log('Warte 8 Sekunden bevor der Browser geschlossen wird...');
        await delay(8000); // Letzte Wartezeit vor dem Schließen des Browsers
        await driver.quit();
        console.log('Browser geschlossen.');
    }
}

testWarenkorbGesamtsummeMitDelay(); // Führt den Test aus
