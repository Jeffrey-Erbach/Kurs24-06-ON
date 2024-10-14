// function = leitet eine Funktion in JS ein
function getAge() {
    // console.log("Alter: " + document.getElementById("alter").value);
    // floor = Macht aus einer Kommazahl eine Ganzzahl
    // random = Erstellt eine Zahl zwischen 0 und 100 (0.0 bis 0.99)
    return Math.floor(Math.random() * 100);
}

function checkAge() {
    // Holt sich den Wert aus der Funktion getAge()
    age = getAge();
    console.log("Dein Alter ist: " + age);

    if (age < 18) {  // Klammer statt Semikolon
        console.log("Du bist noch nicht volljährig");

    } else if(age >= 67){
        console.log("Du bist Rentner");
    }
    else {
        console.log("Du bist volljährig");
    }
}
// Funktionsaufruf 
checkAge();