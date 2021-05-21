fetch('https://reqres.in/api/users/')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log("Something went wrong!", err);
  });
