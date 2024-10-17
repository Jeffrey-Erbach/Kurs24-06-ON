// Wie haben wir bisher Arrays angelegt?

// Ein leeres Array
const leeresArray = [];


// Ein einfaches Zahlen-Array.
// Array hat eine Länge von 5
// Indizes: 0 - 4
const zahlenArray = [1, 2, 3, 4, 5];


// Ein einfaches String-Array
const namen = ["ahmet", "brian", "stevan", "ivonne"];


// Auswahl eines beliebigen Elements aus eine Array.
console.log(namen[0]); // ahmet
console.log(namen[1]); // brian
console.log(zahlenArray[3]); // 4


// Befüllen von Arrays.
namen.push("marcel");
zahlenArray.push(6);
leeresArray.push("Hund");
namen.push("iman", "jeffrey", "rudi", "markus", "katharina")
console.log(namen);
console.log(zahlenArray);
console.log(leeresArray);


// Entfernen des letzten Elementes aus einem Arrays.
// Das letzte Element eines Arrays muss nicht angegeben werden!

//namen.pop("katharina");
namen.pop();

//zahlenArray.pop(6);
zahlenArray.pop();

//leeresArray.pop("Hund");
leeresArray.pop()

console.log(namen);
console.log(zahlenArray);
console.log(leeresArray);


// Splice kann Elemente in einem Array entfernen.
// Es muss immer Start- und Endwert angegeben werden.
// namen.splice(2);
// console.log(namen);


// Unshift fügt Elemente an den Anfang eines Arrays hinzu.
namen.unshift("alper", "stefan", "patrick");
console.log(namen);

 // Shift
 namen.shift("patrick");
 console.log(namen);

// CALLBACKS
// Soll die Elemente eines Arrays einzeln ausgeben.
namen.forEach(namen => {
    console.log(namen);

 });

// Manipulation
let slicedNamen = namen.slice(2,5);
 console.log(slicedNamen);


