//Example (Nullish Coalescing | Optional Value of Null)

let amul = null;

let val = amul ?? "nandani milk";

let val2 = null ?? " default"; // "default" (?? return the right side if left is null/undefined)

val = "which milk? -> " + val;

console.log(val)
