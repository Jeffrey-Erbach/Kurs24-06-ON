const fs = require('fs');

async function readAndWrite() {
    try{
        // Lesen der Datei
        const data = fs.readFileSync('beispielTextdatei.txt', 'utf8');

        // Inhalt ändern
        const modifiedData = data.replace('Text', 'neuer Text');

        // geänderte Inhalte in die Datei überschreiben
        fs.writeFileSync('beispielTextdatei.txt', modifiedData, 'utf8');
        console.log('Datei erfolgreich bearbeitet');

    } catch(err) {
        console.error('Es gab einen Fehler beim Bearbeiten', err);
    }

};

readAndWrite();