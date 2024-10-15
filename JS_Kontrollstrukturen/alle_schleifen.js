// Funktion zur Zählung der Elemente, die größer als der gegebene Schwellenwert sind
function countGreaterThanThreshold(array, threshold) {
    let count = 0; // Initialisiere Zähler für Elemente, die größer sind als der Schwellenwert

    // Implementierung mit einer For-Schleife
    for (let i = 0; i < array.length; i++) {
        if (array[i] > threshold) { // Überprüfen, ob das Element größer ist als der Schwellenwert
            count++; // Erhöhe den Zähler
        }
    }
    console.log("Anzahl der Elemente größer als " + threshold + " (For-Schleife): " + count);

    // Zähler zurücksetzen für die nächste Schleifenart
    count = 0; 

    // Implementierung mit einer While-Schleife
    let j = 0; // Initialisiere Zählvariable für die While-Schleife
    while (j < array.length) {
        if (array[j] > threshold) { // Überprüfen, ob das Element größer ist als der Schwellenwert
            count++; // Erhöhe den Zähler
        }
        j++; // Erhöhe den Index
    }
    console.log("Anzahl der Elemente größer als " + threshold + " (While-Schleife): " + count);

    // Zähler zurücksetzen für die nächste Schleifenart
    count = 0; 

    // Implementierung mit einer Do-While-Schleife
    let k = 0; // Initialisiere Zählvariable für die Do-While-Schleife
    do {
        if (array[k] > threshold) { // Überprüfen, ob das Element größer ist als der Schwellenwert
            count++; // Erhöhe den Zähler
        }
        k++; // Erhöhe den Index
    } while (k < array.length); // Schleife läuft, solange k kleiner ist als die Länge des Arrays
    console.log("Anzahl der Elemente größer als " + threshold + " (Do-While-Schleife): " + count);
}

// Gegebenes Array und Schwellenwert
const dataArray = [10, 23, 35, 47, 52, 66, 71, 88, 90];
const thresholdValue = 50;

// Funktion aufrufen
countGreaterThanThreshold(dataArray, thresholdValue);
