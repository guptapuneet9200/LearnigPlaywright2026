let responseCode: number[] = [200,201,302,404,403,500]

function getFailedCodes(codes: number[]): number[]{
return codes.filter(function(code:number): boolean{
return code>=400;
})
}

console.log("All codes",responseCode)
console.log("Failed codes",getFailedCodes(responseCode))