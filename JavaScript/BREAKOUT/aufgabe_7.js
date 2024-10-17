// Erstellt ein Set namens sportartenSet
let sportartenSet = new Set(['Fußball', 'Basketball', 'Tennis']);

// Überprüft die Anzahl der einzigartigen Sportarten
console.log(sportartenSet.size); // Ausgabe: 3

// Entfernt 'Basketball' und gibt die aktualisierte Größe des Sets aus
sportartenSet.delete('Basketball');
console.log(sportartenSet.size); // Ausgabe: 2

// Iteriert über das Set und gebt jede Sportart aus
sportartenSet.forEach(function(sportart) {
    console.log(sportart); // Ausgabe der verbleibenden Sportarten
});
