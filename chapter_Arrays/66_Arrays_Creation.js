// Array literal (preferred)

let arr = ["Chrome", "Firefox", "Safari", "Edge"];

// Array constructor 

let scores = new Array(3); // create array with 3 empty slots

// OR

let scores1 = new Array(1,2,3); //  create array with 3 elements

let test = Array.of(10,20,30,40,50);
console.log(test.length);

//Array.from()
let char = Array.from("Hello"); 
console.log(char);// ['H', 'e', 'l', 'l', 'o' ]
