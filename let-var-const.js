// ------------------------------------------------------------------------

// expected output: undefined

console.log(a);

var a = 5;

// ------------------------------------------------------------------------


// ReferenceError: Cannot access 'c' before initialization

console.log(b);

let b = 5;

// ------------------------------------------------------------------------

// ReferenceError: Cannot access 'c' before initialization


console.log(c);

const c = 5;
// ------------------------------------------------------------------------