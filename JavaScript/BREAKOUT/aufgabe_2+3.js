// Aufgabe 2
// Erstellt eine Map namens stadtMap
let stadtMap = new Map();

// Fügt Paare hinzu
stadtMap.set('Berlin', 'Deutschland');
stadtMap.set('Paris', 'Frankreich');

// Greift auf den Wert des Schlüssels 'Berlin' zu und gibt ihn aus
console.log(stadtMap.get('Berlin')); // Ausgabe: Deutschland

// Überprüft, ob der Schlüssel 'Rom' in der Map existiert
console.log(stadtMap.has('Rom')); // Ausgabe: false


// Aufgabe 3
// Erweitert die stadtMap um 'Rom' : 'Italien'
stadtMap.set('Rom', 'Italien');

// Iteriert mit .forEach() und gibt jedes Paar im Format "Stadt: Land" aus
stadtMap.forEach(function(land, stadt) {
  console.log(stadt + ': ' + land);
});
