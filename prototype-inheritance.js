function User(name) {
    this.name = name;
    console.log("User class...");
}

User.prototype.getFullName = function(name) {
    return "Hello " + this.name;
    
}

let user = new User("Safak");
console.log(user.getFullName());

let user2 = new User("Oguz");
console.log(user2.getFullName());