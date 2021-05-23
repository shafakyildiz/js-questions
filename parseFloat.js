function area(r) {
    return r ** 2 * Math.PI;
  }
  
  console.log(area(4.567));
  // expected output: 28.695307297889173
  
  console.log(area('abcdefgh'));
  // expected output: NaN

  console.log(area('2'));
  // expected output: 12.566370614359172