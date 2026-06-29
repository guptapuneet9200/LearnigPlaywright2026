// let a = 10
// console.log(a)
// if (true) {
//     console.log(a);  -> output is -> 10,10
// }

let a = 10
console.log(a)
if (true) {
    console.log(a);
    let a = 20
    // output is "Cannot access 'a' before initialization"
}