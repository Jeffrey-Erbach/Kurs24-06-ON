function factorial(n) {
    let result = 1;

    for (let i = n; i > 0; i--) {
        result *= i;
    }

    return result;
}

const ergebnisFor = factorial(5);
console.log("Fakultät: " + ergebnisFor);
