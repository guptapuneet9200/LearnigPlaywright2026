let scores = [45,82,91,60,73];

//MAP
let grades  = scores.map(s=>s>70? "Pass" : "Fail");
// OR let grades  = scores.map(s=>s>70);
console.log(grades);

//Filter

let passing = scores.filter(d=>d>=70);
console.log(passing);

//Reduce (this will not generally use in automation)

let total = scores.reduce((sum,s)=>sum+s,0);
console.log(total);

//Same action we can perform using for loop instead of use reduce.
