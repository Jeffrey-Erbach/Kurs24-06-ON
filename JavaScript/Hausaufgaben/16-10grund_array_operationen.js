// 1. Erstellt ein Array mit den Zahlen 1 bis 10
let numbers = Array.from({ length: 10 }, (_, i) => i + 1); // Erstelle ein Array von 1 bis 10

// 2. Fügt die Zahl 11 am Ende des Arrays hinzu
numbers.push(11);

// 3. Entfernt die erste Zahl aus dem Array
numbers.shift();

// 4. Findet die Position der Zahl 5 im Array
let position = numbers.indexOf(5);

// 5. Überprüft, ob die Zahl 7 im Array enthalten ist
let containsSeven = numbers.includes(7);

// Ausgabe der Ergebnisse
console.log("Aktuelles Array:", numbers);
console.log("Position der Zahl 5:", position);
console.log("Enthält das Array die Zahl 7?", containsSeven);
