function factorialWhile(n) {
    let result = 1;
    let i = n;

    while (i > 0) {
        result *= i;
        i--;
    }

    return result;
}

const ergebnisWhile = factorialWhile(5);
console.log("Fakultät: " + ergebnisWhile);
