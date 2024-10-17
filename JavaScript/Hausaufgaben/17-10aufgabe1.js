// Erstellt eine Map namens benutzerVerwaltung
let benutzerVerwaltung = new Map();

// Fügt mindestens drei Benutzer zur Map hinzu
benutzerVerwaltung.set('Ahmet Ünal', { email: 'ahmet@techstarter.de', rolle: 'Admin' });
benutzerVerwaltung.set('Jacob Menge', { email: 'jacob@techstarter.de', rolle: 'User' });
benutzerVerwaltung.set('Patrick rosenbaum', { email: 'patrick@techstarter.de', rolle: 'Gast' });

// Erstellt eine Funktion zeigeBenutzer
function zeigeBenutzer() {
    benutzerVerwaltung.forEach(function(details, benutzername) {
        console.log(`${benutzername}: ${details.email}, Rolle: ${details.rolle}`);
    });
}

// Aufruf der Funktion
zeigeBenutzer();
