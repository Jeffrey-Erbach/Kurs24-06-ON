const fs = require('fs');

const content = 'Den Text habe ich einfügen lassen.';
fs.writeFile('beispielTextdatei.txt', content, 'utf8', (err) => {
    if (err) {
    console.error('Es gab einen Fehler beim Schreiben der Datei:', err);
    return;
  }
  console.log('Datei wurde erfolgreich geschrieben!');

})

fs.readFile('beispielTextdatei.txt', 'utf8', (err, data) => {

    if (err) {
      console.error('Es gab einen Fehler beim Lesen der Datei:', err);
      return;
    }
    console.log(data);
  
  })