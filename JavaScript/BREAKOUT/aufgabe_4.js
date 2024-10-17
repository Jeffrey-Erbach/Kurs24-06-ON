// Erstellt ein Set namens buchstabenSet
let buchstabenSet = new Set(['A', 'B', 'C']);

// Überprüft, ob der Buchstabe 'D' im Set existiert
console.log(buchstabenSet.has('D')); // Ausgabe: false

// Fügt den Buchstaben 'A' erneut hinzu und gibt die Anzahl der Elemente im Set aus
buchstabenSet.add('A');
console.log(buchstabenSet.size); // Ausgabe: 3 (Da 'A' schon existiert)

// Iteriert über das Set und gibt jedes Element aus
buchstabenSet.forEach(function(buchstabe) {
  console.log(buchstabe);
});
