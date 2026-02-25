//A basic program going over the different variable types in JS

function variables() {
  //Weakly-typed
  let a = "I am a string";
  let b = 100;
  let c = 100.1;
  let d = true;
  let e = a + " " + b; //Concatenation
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);

  console.log(typeof a); //string
  console.log(typeof b); //number
  console.log(typeof c); //number
  console.log(typeof d); //boolean
  console.log(typeof e); //string

  //Change type
  b = a;

  console.log(b); //I am a string

  //Random value
  let ran = Math.random(); //Between 0 and 1 (but not including 1)

  let x = 1;

  x++;
  console.log(x); //2

  x += 10;
  console.log(x); //12

  x %= 7; //Modulus
  console.log(x); //5

  x *= 10;
  console.log(x); //50
  console.log(x++); //50. Logs x first, then increments
  console.log(++x); //52. Increments, then logs

  //Math has other functions
  x = 215.67;
  let y = Math.round(x);
  let z = Math.floor(x);
  console.log(x); //215.67
  console.log(y); //216
  console.log(z); //215

  let aString = "55"; // String
  console.log(isNaN(aString)); // is Not a Number, true
  let aNumber = Number(aString); // Convert to number
  console.log(isNaN(aNumber)); // is Not a Number, false

  console.log(Math.PI); // BRING ME SOME PIE

  let name = "John";
  console.log("Hello".concat(" ", name, "!")); // Using concat to join strings
  console.log(`Hello ${name}!`); // Using template literals to join strings
  console.log("Hello " + name + "!"); // Using + to join strings

  if (true) {
    let x = 10; // Block-scoped variable, won't interfere with the x outside the block
    console.log(x); // 10
    var f = 20; // Function-scoped variable, considered legacy, not really used anymore
  }

  console.log(x); // ReferenceError: x is not defined
  console.log(f); // 20, because var is function-scoped, not block-scoped
}

variables();
