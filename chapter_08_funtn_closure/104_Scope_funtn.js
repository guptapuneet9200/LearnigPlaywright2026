// Scope in functions

/*
let env = "staging"; //global scope

function setupConfig() {
    let timeout = 1000; //local scope
    console.log(env); //can access global variable
    console.log(timeout); //can access local variable
}
setupConfig();
 console.log(env);
 console.log(timeout); 

 */

 function outer() {

    let x=10;

    function inner() {
        let y=20;
        console.log(x);  //inner can access outer variable
    }
    inner();
    console.log(y); //outer cannot access inner variable
 }
outer();