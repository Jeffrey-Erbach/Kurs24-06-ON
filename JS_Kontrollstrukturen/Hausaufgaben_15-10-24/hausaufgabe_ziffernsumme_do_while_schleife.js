function digitSum(number) {
    // Stellt sicher, dass die Eingabe eine positive ganze Zahl ist
    if (number < 0) {
        return "Bitte geben Sie eine positive ganze Zahl ein."; // Fehlermeldung für negative Zahlen
    }

    // Initialisiert die Variable für die Ziffernsumme
    let sum = 0; 
    // Verwendet eine Variable, um die aktuelle Zahl zu speichern
    let currentNumber = number; 

    // Hier beginnt die do-while-Schleife
    do {
        // Ermittlt die letzte Ziffer der aktuellen Zahl 
        let lastDigit = currentNumber % 10; 
        // Addiert die letzte Ziffer zur Summe 
        sum += lastDigit; 
        // Entfernt die letzte Ziffer von der aktuellen Zahl
        currentNumber = Math.floor(currentNumber / 10); 
    } while (currentNumber > 0); // Schleife läuft, solange noch Ziffern vorhanden sind

    // Gibt die berechnete Ziffernsumme zurück
    return sum; 
}

// Aufruf der Funktion mit der Zahl 315
const ergebnisZiffernsumme = digitSum(315);
// Gibt die Ziffernsumme in der Konsole aus
console.log("Ziffernsumme von 315: " + ergebnisZiffernsumme);
