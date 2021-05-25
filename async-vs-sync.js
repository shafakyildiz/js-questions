// Synchronous Code

console.log("Hello");
console.log("World");
console.log("Javascript\n");


// Asynchronous Code

console.log("Hello");
setTimeout(() => {
    console.log("World");
}, 3000);
console.log("Javascript");

// Expected Output
// Hello
// World
// Javascript

// Hello
// Javascript
// World