// Erstellt ein Array mit den Namen von fünf verschiedenen Städten
let cities = ["Berlin", "München", "Hamburg", "Köln", "Frankfurt"];

// Iteriert über das Array und gib jede Stadt in Großbuchstaben aus
cities.forEach(city => {
  console.log(city.toUpperCase());
});

// Erstellt ein neues Array, das die Anzahl der Buchstaben in jedem Stadtnamen speichert
let letterCounts = cities.map(city => city.length);

// Ausgabe des neuen Arrays mit Buchstabenanzahlen
console.log("Anzahl der Buchstaben in jedem Stadtnamen:", letterCounts);
