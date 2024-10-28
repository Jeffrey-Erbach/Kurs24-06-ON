const fs = require('fs').promises;

async function readAndWrite() {
    try{
        // Lesen der Datei
        const content = 'Den Text habe ich einfügen lassen';

        // Inhalt ändern
        await fs.writeFile('beispielTextdatei.txt', content, 'utf8');

        // geänderte Inhalte in die Datei überschreiben
        await fs.readFile('beispielTextdatei.txt', 'utf8');

    } catch(err) {
        console.error('Es gab einen Fehler beim Bearbeiten der Datei', err);
    }

};

readAndWrite();