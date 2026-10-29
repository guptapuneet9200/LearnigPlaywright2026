// Accessing and Modifying Array Elements

let status1= ["pass", "fail", "pending", "blocked"];

console.log(status1[0]); // pass

console.log(status1.at(-1)); // blocked

console.log(status1[-8]); // undefined

// Modifying array elements

status1[0] = "reject"; // modifying first element

console.log(status1); // pass

//Length

console.log(status1.length)
