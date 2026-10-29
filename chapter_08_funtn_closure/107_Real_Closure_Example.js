function maxRetryTracker(max){

    let attempts = 0;

    function tryAgain(testName)
{
attempts++;
if(attempts>max)
{

return `${teastName} exceeded max retries (${max})`;
}
return `Attempt ${attempts}/${max}  for ${testName}`;

}
return tryAgain;
}

let runTCRetry = maxRetryTracker(3);
console.log(runTCRetry("Login Test"));
console.log(runTCRetry("Login Test"));
console.log(runTCRetry("Login Test"));
console.log(runTCRetry("Login Test")); 