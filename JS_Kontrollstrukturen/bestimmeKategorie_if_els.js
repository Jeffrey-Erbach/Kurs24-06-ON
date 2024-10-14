// Funktion zur Bestimmung der Alterskategorie
function bestimmeKategorie(alter) {
    let kategorie;
  
    // If-Else-Anweisung zur Bestimmung der Alterskategorie
    if (alter >= 0 && alter <= 12) {
      kategorie = "Kind";
    } else if (alter >= 13 && alter <= 17) {
      kategorie = "Jugendlicher";
    } else if (alter >= 18 && alter <= 64) {
      kategorie = "Erwachsener";
    } else if (alter >= 65) {
      kategorie = "Senior";
    }
  
    // Ausgabe der Alterskategorie und des Alters
    console.log("Das Alter ist: " + alter + " Jahre. Die Alterskategorie ist: " + kategorie);
  }
  
  // Testen der Funktion
  bestimmeKategorie(10);  // Kind
  bestimmeKategorie(15);  // Jugendlicher
  bestimmeKategorie(30);  // Erwachsener
  bestimmeKategorie(70);  // Senior 
  