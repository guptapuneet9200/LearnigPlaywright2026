
/* Case 1: Output is "Punt"
var a = "Punit";

if (true) {

    console.log(a);
}

*/

/* Case 2: Output is "Punt"
var a = "Punit";

if (true) {

    console.log(a);
    var a = "temp"
}

*/

/* Case 2: Output is "Punt" & "temp"
var a = "Punit";

if (true) {

    console.log(a);
    var a = "temp";
    console.log(a);
}
*/