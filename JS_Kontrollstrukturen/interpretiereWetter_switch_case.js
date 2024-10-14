// Funktion zur Interpretation der Wetterlage und Vorschlag einer Aktivität
function interpretiereWetter(wetterlage) {
    let aktivität;
  
    // Switch-case-Anweisung zur Bestimmung der Aktivität
    switch (wetterlage) {
      case "Sonnig":
        aktivität = "Gehe spazieren";
        break;
      case "Regnerisch":
        aktivität = "Bleibe zu Hause und lese ein Buch";
        break;
      case "Schnee":
        aktivität = "Baue einen Schneemann";
        break;
      case "Windig":
        aktivität = "Fliege einen Drachen";
        break;
      default:
        aktivität = "Es ist nebelig. Fahre heute vorsichtig.";
    }
  
    // Ausgabe der Wetterlage und der vorgeschlagenen Aktivität
    console.log("Wetterlage: " + wetterlage + ". Vorschlag: " + aktivität);
  }
  
  // Testen der Funktion
  interpretiereWetter("Sonnig");     // Gehe spazieren
  interpretiereWetter("Regnerisch");  // Bleibe zu Hause und lese ein Buch
  interpretiereWetter("Schnee");      // Baue einen Schneemann
  interpretiereWetter("Windig");      // Fliege einen Drachen
  interpretiereWetter("Nebelig");     // Unbekannte Wetterlage
  