const getResult = (score) => {
    if (score>=70) return "Pass" ;
    return "Fail";
}

console.log(getResult(0));