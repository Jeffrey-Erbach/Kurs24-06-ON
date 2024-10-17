// Aufgabe 6
// Erstellt eine Map namens buecherMap
let buecherMap = new Map([
  ['Der Alchemist', { autor: 'Paulo Coelho', seiten: 198 }],
  ['Harry Potter', { autor: 'J.K. Rowling', seiten: 223 }],
  ['Der Hobbit', { autor: 'J.R.R. Tolkien', seiten: 310 }]
]);

// Greift auf die Seitenanzahl des Buches 'Der Alchemist' zu und gibt den Titel aus
let alchemist = buecherMap.get('Der Alchemist');
console.log(`Titel: Der Alchemist, Seiten: ${alchemist.seiten}`); // Ausgabe: Titel: Der Alchemist, Seiten: 198

// Aufgabe 8
// Iteriert über die buecherMap und gibt jedes Buch und seine Eigenschaften aus
buecherMap.forEach(function(buch, titel) {
  console.log(`${titel}: Autor: ${buch.autor}, Seiten: ${buch.seiten}`);
});
