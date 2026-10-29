let scores = [
    [85,90,78],
    [60,45,70],
    [95,88,92]
]

//Row Sum
let rowSum = scores.map(r=>r.reduce((a,b)=>a+b))
console.log(rowSum) //[ 253, 175, 275 ]

console.log("-------------")

let suiteResults = [
    ["login-pass","register-pass","logout-pass"],
    ["search-pass","filter-fail","sort-pass"],
    ["checkout-fail","payment-fail","confirm-pass"]
]

for(let i=0;i<suiteResults.length;i++){
    for(j=0;j<suiteResults[i].length;j++){
        if(suiteResults[i][j].includes("fail")){
            console.log(suiteResults[i][j]);
        }
    }
}