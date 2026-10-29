// Searching and Checking for a string in a string

let url = "https://staging.vwo.com/api/login?retry=true";

// includes()

url.includes("staging"); // true
url.includes("https");

// startsWith() and endsWith()

url.startsWith("https"); // true
url.endsWith("login"); // false 

//Indexof() and lastIndexOf()

console.log(url.indexOf("a")); 
console.log(url.lastIndexOf("w"));
console.log(url.lastIndexOf("nothere")); // -1