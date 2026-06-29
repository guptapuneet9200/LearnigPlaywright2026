/* Case 1: Output is "Punt"

let a = "Punit"
{
    console.log(a);
}

*/

/* Case 2: Output is "Punit"

let a = "Punit"
if (true) {
    console.log(a);
}

*/


/* Case 3: Output is "Cannot access 'a' before initialization"

let a = "Punit"
if (true) {
    console.log(a);  //Local variable , TDZ
    let a = "Gupta"
}

*/

