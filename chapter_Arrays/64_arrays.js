let fruit = []; //Enpty array means it has no elements
const browsers = ["chrome", "firefox", "webkit"]; 
//constant arrays means here value of browser cannot be change,or we can use let also

let browser = ["chrome", "firefox", "webkit"]; 
console.log(browser[0]); //chrome
console.log(browser.at(-1)); //webkit
console.log(browser[-1]); //undefined

console.log(browser.at(2)); //chrome
console.log(browser.length); //3
console.log(fruit.length); //0
