function calcSum(array){
    // var und let. Mit beiden können Variablen deklariert werden.
    // Einsatz hängt von der Verwendung im Gültikkeitsbereich = Scope ab.
    // var: Ist innerhalb der Funktion sichtbar on der es deklariert wurde,
    // oder global, wenn es außerhalb einer Funktion deklariert wird.
    //let: Ist innerhalb eines Blocks {} gültog in der es deklariert wird.

        let sum = 0;
    
        for (let i = 0; i < array.length; i++) {  
            sum += array[i];
        }
    
        return sum;

}

    const zahlenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const ergebnisSum = calcSum(zahlenArray);
    console.log("Die Summe beträgt: " + ergebnisSum);

