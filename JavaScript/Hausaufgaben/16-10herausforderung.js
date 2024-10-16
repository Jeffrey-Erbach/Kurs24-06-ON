// Erstellt ein Array, das ein Kartenspiel simuliert
let suits = ['Herz', 'Kreuz', 'Pik', 'Karo'];
let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Bube', 'Dame', 'König', 'Ass'];

let deck = [];

// Füllt das Deck mit Karten
for (let suit of suits) {
  for (let value of values) {
    deck.push({ suit, value });
  }
}

// Funktion zum Mischen der Karten
function shuffleDeck() {
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]]; // Karten tauschen
  }
}

// Funktion zum Ziehen einer Karte
function drawCard() {
  return deck.pop(); // Ziehe die oberste Karte
}

// Funktion für verbleibende Karten
function remainingCards() {
  return deck.length; // Anzahl der verbleibenden Karten
}

// Beispiele für die Nutzung der Funktionen
shuffleDeck(); // Mische das Deck
console.log("Gezogene Karte:", drawCard()); // Ziehe eine Karte
console.log("Verbleibende Karten:", remainingCards()); // Anzahl der verbleibenden Karten
