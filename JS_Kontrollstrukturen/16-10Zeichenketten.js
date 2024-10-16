//Aufgabe 1 "String Verkettung"
const name = "Jeffrey";
const age = 31;

const greeting = `Hallo, ${name}. Du bist ${age} Jahre alt.`;
console.log(greeting);


//Aufgabe2 "Template Striung"
const vorname = "Jeffrey";
const nachname = "Erbach";
const stadt = "Düsseldorf";

const vorstellung = `Ich heiße ${vorname} ${nachname} und komme aus ${stadt}.`;
console.log(vorstellung);


//Aufgabe3 "String Methoden"
let fullName = "   Jeffrey Erbach   ";
let trimmedName = fullName.trim();

console.log(trimmedName.toLowerCase());
console.log(trimmedName.toUpperCase());


//Aufgabe 4 "String-Interpolation in Funktionen"
function begruesse(name) {
    return `Willkommen, ${name}!`;
  }
  
  console.log(begruesse("Jeffrey"));
  

//Aufgabe 5 "Verwendung von replace()"
let satz = "Das Wetter ist heute schlecht.";
let neuerSatz = satz.replace("schlecht", "großartig");

console.log(neuerSatz);
