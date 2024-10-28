const fs = require('fs');
const readline = require('readline');
const readlineSync = require('readline-sync');

// Funktion zur Auswahl zwischen synchronem und asynchronem Ansatz
function askMode() {
    return readlineSync.question('Wähle den Modus (synchron/asynchron): ').toLowerCase();
}

// Asynchrone Methode
function writeAsync(fileName, message) {
    fs.appendFile(fileName, message + '\n', (err) => {
        if (err) {
            console.error('Fehler beim Schreiben in die Datei:', err);
        } else {
            console.log('Nachricht erfolgreich (asynchron) hinzugefügt.');
        }
    });
}

// Synchrone Methode
function writeSync(fileName, message) {
    try {
        fs.appendFileSync(fileName, message + '\n');
        console.log('Nachricht erfolgreich (synchron) hinzugefügt.');
    } catch (err) {
        console.error('Fehler beim Schreiben in die Datei:', err);
    }
}

// Benutzerabfrage
function askInput() {
    const fileName = readlineSync.question('Gib den Namen der Datei ein: ');
    const message = readlineSync.question('Gib die Nachricht ein, die in die Datei geschrieben oder angehängt werden soll: ');
    return { fileName, message };
}

// Hauptprogramm
function main() {
    const mode = askMode();
    const { fileName, message } = askInput();

    if (mode === 'synchron') {
        writeSync(fileName, message);
    } else if (mode === 'asynchron') {
        writeAsync(fileName, message);
    } else {
        console.log('Ungültige Auswahl. Bitte synchron oder asynchron eingeben.');
    }
}

main();
