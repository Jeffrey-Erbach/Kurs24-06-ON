const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(express.json());  // Stellt sicher, dass JSON-Daten verarbeitet werden können
app.use(cors());  // CORS aktivieren für Cross-Origin-Anfragen

// Die Liste der Items
let items = [];

// Middleware zur Validierung der Eingaben für Items
function validateItem(req, res, next) {
  const { name, type } = req.body;

  // Name muss eine gültige Zeichenkette sein
  if (typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ message: 'Name muss eine gültige Zeichenkette sein.' });
  }

  // Der Typ muss entweder "Waffe", "Trank" oder "Rüstung" sein
  if (!['Waffe', 'Trank', 'Rüstung'].includes(type)) {
    return res.status(400).json({ message: 'Typ muss "Waffe", "Trank" oder "Rüstung" sein.' });
  }

  next();  // Wenn alles passt, weiter zur nächsten Route
}

// Route: Alle Items anzeigen
app.get('/items', (req, res) => {
  res.json(items);
});

// Route: Ein neues Item hinzufügen
app.post('/items', validateItem, (req, res) => {
  const { name, type } = req.body;
  const newItem = {
    id: items.length + 1,  // Generiert eine eindeutige ID für das neue Item
    name,
    type,
    power: Math.floor(Math.random() * 41) + 10,  // Power zwischen 10 und 50
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Route: Ein Item aufleveln
app.patch('/items/:id/levelup', (req, res) => {
  const { id } = req.params;
  const item = items.find(i => i.id === parseInt(id));

  if (!item) {
    return res.status(404).json({ message: 'Gegenstand nicht gefunden!' });
  }

  const increase = Math.floor(Math.random() * 10) + 1;  // Erhöht den Power-Wert um einen zufälligen Wert zwischen 1 und 10
  item.power += increase;

  res.json({ message: `Gegenstand aufleveln: +${increase} Power`, item });
});

// Route: Einen Heiltrank verwenden
app.post('/items/heal', (req, res) => {
  const { id } = req.body;
  const item = items.find(i => i.id === parseInt(id));

  if (!item) {
    return res.status(404).json({ message: 'Gegenstand nicht gefunden!' });
  }

  if (item.type !== 'Trank') {
    return res.status(400).json({ message: 'Nur Tränke können geheilt werden.' });
  }

  // Regeneriere die Power des Tranks
  const healAmount = Math.floor(Math.random() * 21) + 10;  // Heilung zwischen 10 und 30
  item.power += healAmount;

  res.json({ message: `Heiltrank verwendet: +${healAmount} Power`, item });
});

// Route: Ein Kampf starten
app.post('/battle', (req, res) => {
  const { id } = req.body;
  const playerItem = items.find(i => i.id === parseInt(id));

  if (!playerItem) {
    return res.status(404).json({ message: 'Gegenstand nicht gefunden!' });
  }

  // Erstelle einen zufälligen Gegner
  const opponent = {
    name: 'Gegner',
    power: Math.floor(Math.random() * 41) + 10,  // Power zwischen 10 und 50
  };

  const result = playerItem.power >= opponent.power ? 'gewonnen' : 'verloren';

  res.json({
    message: `Kampf gegen ${opponent.name}: Du hast ${result}!`,
    playerItem,
    opponent,
  });
});

// Server starten
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
