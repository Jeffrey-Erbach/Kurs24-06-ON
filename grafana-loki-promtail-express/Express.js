const express = require('express');
const app = express();
const logger = require('./logger');
const fs = require('fs');

const port = 5001;

app.get('/', (req, res) =>{
    res.send('Hello World');
    console.log("Wurzel Route aufgerufen");
    logger.info('Wurzel Route aufgerufen');
});

app.get('/Hallo', (req, res) =>{
    res.send('Hallo Welt');
    console.log("Hallo Welt Route aufgerufen");
    logger.info('Hallo Welt Route aufgerufen');
});

app.get('/Bye', (req, res) =>{
    res.send('Bye Bye');
    console.log("Bye Route aufgerufen");
    logger.info('Bye Route aufgerufen');
});

app.get('/hello', (req, res) => {
    res.status(200).send('Hello, world!');
    logger.info('Endpoint /hello called');
});

app.get('/error', (req, res) => {
    res.status(404).send('Not Found');
    logger.error('Endpoint /error called - 404 Not Found');
});

// Funktion zum Filtern von Fehler-Logs
function filterErrors(logs) {
    return logs.filter(log => log.startsWith('ERROR'));
}

// Funktion zum Zählen der Log-Level
function countLogLevels(logs) {
    const logCounts = { INFO: 0, WARNING: 0, ERROR: 0 };
    logs.forEach(log => {
        if (log.startsWith('INFO')) logCounts.INFO++;
        else if (log.startsWith('WARNING')) logCounts.WARNING++;
        else if (log.startsWith('ERROR')) logCounts.ERROR++;
    });
    return logCounts;
}

// Endpunkt /logs zum Anzeigen von Fehlern und Log-Level-Zählung
app.get('/logs', (req, res) => {
    fs.readFile('logs/server.log', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Fehler beim Lesen der Log-Datei');
            return;
        }
        const logs = data.split('\n').filter(line => line.trim() !== '');
        const errors = filterErrors(logs);
        const logCounts = countLogLevels(logs);
        res.json({ errors, logCounts });
    });
});

app.listen(port, () => {
    console.log(`Server läuft auf ${port}`);
    logger.info(`Server läuft auf ${port}`);
});