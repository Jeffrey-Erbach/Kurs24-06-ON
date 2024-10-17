// Erstellt ein Array namens autos
let autos = ['BMW', 'Audi', 'Mercedes'];

// Greift auf das zweite Element zu und gibt es aus
console.log(autos[1]); // Ausgabe: Audi

// Fügt das Auto 'Volkswagen' hinzu und gibt das gesamte Array aus
autos.push('Volkswagen');
console.log(autos); // Ausgabe: ['BMW', 'Audi', 'Mercedes', 'Volkswagen']

// Iteriert über das Array und gibt jedes Auto in Großbuchstaben aus
autos.forEach(function(auto) {
  console.log(auto.toUpperCase());
});



