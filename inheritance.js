function User() {
  console.log("User class...");
  this.getName = (name) => {
    return "Hello " + name;
  };
}

let user = new User();
console.log(user.getName("Safak"));

let user2 = new User();
console.log(user.getName("Oguz"));