console.log('hello world');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://reqres.in/api/users/');
xhr.send();
 
xhr.onloadend = function() {
    if (xhr.status === 200) {
      console.log("success");
    } else {
      console.log("error " + this.status);
    }
  };
