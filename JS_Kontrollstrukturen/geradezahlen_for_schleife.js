function sumEvenNumbers() {
    let sum = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }

    return sum;
}

const ergebnisFor = sumEvenNumbers();
console.log("Summe der geraden Zahlen: " + ergebnisFor);
