// function = leitet eine Funktion in JS ein
function getAge() {
    // console.log("Alter: " + document.getElementById("alter").value);
    // floor = Macht aus einer Kommazahl eine Ganzzahl, indem die Nachkommastelle gestrichen wird.
    // random = Erstellt eine Zahl zwischen 0 und 100 (0.0 bis 0.99)
    return Math.floor(Math.random() * 100);
}

function checkAge() {
    // Holt sich den Wert aus der Funktion getAge()
    age = getAge();
    console.log("Dein Alter ist: " + age);

    switch (true) {
        case (age < 18 && age <=66): 
            console.log("Du bist noch nicht volljährig");
            break;
        case (age >= 18):
            console.log("Du bist erwachsen!");
            break;
//      case (age >= 67):
//          console.log("Du bist im Rentenalter!");
//          break;
        default:
            console.log("Du bist im Rentenalter!");

    } 

}

checkAge();