function sumEvenNumbersDoWhile() {
    // Initialisiert die Variable, um die Summe der geraden Zahlen zu speichern
    let sum = 0; 
    // Setzt die Zählvariable i auf 1 (Es beginnt mit der Zahl 1)
    let i = 1; 

    // Beginnt die do-while-Schleife
    do {
        // Überprüfe, ob die aktuelle Zahl i gerade ist
        if (i % 2 === 0) {
            // Wenn i gerade ist, addiert es zur Summe
            sum += i; 
        }
        // Erhöht i um 1, um zur nächsten Zahl zu gelangen
        i++; 
    } while (i <= 100); // Die Schleife läuft, solange i kleiner oder gleich 100 ist

    // Gibt die berechnete Summe zurück 
    return sum; 
}

// Ruft die Funktion auf und speichert das Ergebnis in einer Variablen 
const ergebnisDoWhile = sumEvenNumbersDoWhile();
// Gibt die Summe der geraden Zahlen in der Konsole aus
console.log("Summe der geraden Zahlen: " + ergebnisDoWhile);
