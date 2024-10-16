// Erstellt ein Array von Arrays mit Informationen über Bücher
let books = [
    ['War and Peace', 'Leo Tolstoy', 1225],
    ['Moby Dick', 'Herman Melville', 635],
    ['1984', 'George Orwell', 328],
    ['Der Prozess', 'Franz Kafka', 300],
    ['Die Verwandlung', 'Franz Kafka', 200]
  ];
  
  // Sortiert das Array von höchstens nach mindestens Seiten (Index 2)
  books.sort((a, b) => b[2] - a[2]);
  
  // Erzeugt ein neues Array mit Titeln von Büchern mit mehr als 300 Seiten (Index 2)
  let longBooksTitles = books
    .filter(book => book[2] > 300)
    .map(book => book[0]); // Titel ist der Index 0
  
  // Ausgabe
  console.log("Sortierte Bücher:", books);
  console.log("Bücher mit mehr als 300 Seiten:", longBooksTitles);
  