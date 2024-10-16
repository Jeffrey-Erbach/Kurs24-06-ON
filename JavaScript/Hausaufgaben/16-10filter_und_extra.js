// Erstellt ein Array mit zufälligen Zahlen zwischen 1 und 100 (mindestens 20 Zahlen)
let randomNumbers = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);

// Filtert der geraden Zahlen in einem neuen Array
let evenNumbers = randomNumbers.filter(num => num % 2 === 0);

// Berechnet die Summe aller gefilterten geraden Zahlen
let sumOfEvens = evenNumbers.reduce((sum, num) => sum + num, 0);

// Ausgabe der Ergebnisse
console.log("Zufällige Zahlen:", randomNumbers);
console.log("Gerade Zahlen:", evenNumbers);
console.log("Summe der geraden Zahlen:", sumOfEvens);
