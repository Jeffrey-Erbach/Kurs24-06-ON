const express = require('express');
const cors = require('cors');
const { createLogger, format, transports } = require('winston');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Winston Logger
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(
      ({ timestamp, level, message }) => `${timestamp} [${level.toUpperCase()}]: ${message}`
    )
  ),
  transports: [
    new transports.Console(), // Ausgabe in die Konsole
    new transports.File({ filename: 'application.log' }) // Ausgabe in die Log-Datei
  ],
});

// Logging-Route
app.post('/log', (req, res) => {
  const { level, message } = req.body;

  // Prüfen, ob das Level existiert
  if (logger[level]) {
    logger[level](message); // Loggen mit Winston
    console.log(`[${level}] ${message}`); // Debug-Ausgabe im Backend
  } else {
    logger.info(message); // Standard-Logging, falls kein Level angegeben
    console.log(`[info] ${message}`); // Debug-Ausgabe im Backend
  }

  res.status(200).send('Log empfangen');
});

// Start des Servers
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
