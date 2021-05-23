const jsonExample = '{"car":"mercedes", "transmission": "automatic", "km": 42000}';
const someObj = JSON.parse(jsonExample);

console.log(someObj.car);
console.log(someObj.transmission);
console.log(someObj.km);

// expected output
// mercedes
// automatic
// 42000    