/*
0 == ""    //output -----> true (both convert to zero)
0 == "0"    //output -----> true ("0" -> 0)
0 == false   //output -----> true 
null == undefined //output -----> true (special case)
"\t\n" == 0 //output -----> true 
*/

// -----------RULE Breaker (all below are false)---------
null == 0 //false
null == ""; //false
null == false; //false
undefined == 0; //false
undefined == ""; //false
undefined == false; //false
NaN == NaN //false

/*
console.log("" === false); //false
console.log("" == false);  //true
console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(0 === false) //false
console.log(0 == false) //true


console.log("0" == false); //true
console.log("" == "0"); //false

*/