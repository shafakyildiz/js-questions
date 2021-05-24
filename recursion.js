function Factorial(n) {
    if (n === 1) {
        return n;
    } else {
        return n * Factorial(n - 1);
    }
}

Factorial(3); //6