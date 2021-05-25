class Vehicle {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class Car extends Vehicle {
  constructor(name, year, km) {
    super(name, year);
    this.km = km;
  }
}

let audi = new Car("A3", 2021, 6500);

console.log(audi.name);
console.log(audi.year);
console.log(audi.km);

// Expected output
// A3
// 2021
// 6500