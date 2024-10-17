// Erstellt ein Set namens besuchteSeiten
let besuchteSeiten = new Set();

// Fügt mindestens fünf Seitennamen zum Set hinzu (mit Duplikaten)
besuchteSeiten.add('Startseite');
besuchteSeiten.add('Profil');
besuchteSeiten.add('Einstellungen');
besuchteSeiten.add('Profil'); // Duplikat
besuchteSeiten.add('Hilfe');

// Gibt die Anzahl der eindeutigen Seiten aus
console.log(besuchteSeiten.size); // Ausgabe der Anzahl der eindeutigen Seiten

// Schreibt eine Funktion zeigeSeiten
function zeigeSeiten() {
    besuchteSeiten.forEach(function(seite) {
        console.log(`Besuchte Seite: ${seite}`);
    });
}

// Aufruf der Funktion
zeigeSeiten();
