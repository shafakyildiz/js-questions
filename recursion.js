function Factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  } else {
    return n * Factorial(n - 1);
  }
}

Factorial(3); //6

console.log(Factorial(4)); // 24
console.log(Factorial(0)); // 1