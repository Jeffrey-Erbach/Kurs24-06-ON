// Funktion, die eine zufällige Note zwischen 1 und 6 zurückgibt
function getGrade() {
  // Math.floor = Macht aus einer Kommazahl eine Ganzzahl
  // Math.random = Erstellt random eine Zahl zwischen 1 - 6 (0.0 - 0.6)
    let grade = Math.floor(Math.random() * 6) + 1;
    let feedback;
  
    // Switch-case-Anweisung zur Bewertung der Note
    switch (grade) {
      case 1:
        feedback = "Sehr gut";
        break;
      case 2:
        feedback = "Gut";
        break;
      case 3:
        feedback = "Befriedigend";
        break;
      case 4:
        feedback = "Ausreichend";
        break;
      case 5:
        feedback = "Mangelhaft";
        break;
      case 6:
        feedback = "Nicht bestanden";
        break;
      default:
        feedback = "Ungültige Note";
    }
  
    // If-Else-Anweisung zur Ausgabe der Rückmeldung
    if (grade <= 3) {
      console.log("Deine Note ist " + grade + ": " + feedback + ". Gute Leistung!");
    } else {
      console.log("Deine Note ist " + grade + ": " + feedback + ". Mehr Übung nötig.");
    }
  
    return grade;
  }
  
  // Testen der Funktion
  getGrade();




