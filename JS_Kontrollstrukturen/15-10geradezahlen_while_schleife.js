function sumEvenNumbersWhile() {
    let sum = 0;
    let i = 1;

    while (i <= 100) {
        if (i % 2 === 0) {
            sum += i;
        }
        i++;
    }

    return sum;
}

const ergebnisWhile = sumEvenNumbersWhile();
console.log("Summe der geraden Zahlen: " + ergebnisWhile);

