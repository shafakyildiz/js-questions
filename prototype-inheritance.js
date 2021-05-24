function User() {
    console.log("User class...");
}

User.prototype.getFullName = function(name) {
    return "Hello " + name;
    
}



let user = new User();
console.log(user.getFullName("Safak"));

let user2 = new User();
console.log(user2.getFullName("Oguz"));