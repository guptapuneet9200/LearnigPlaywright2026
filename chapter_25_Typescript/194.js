"use strict";
function buildEndPoint(base, path) {
    return base + path;
}
function isSuccessCode(code) {
    return code >= 200 && code < 300;
}
function logTestStep(step) {
    console.log("[STEP]" + step);
}
console.log(buildEndPoint("https://api.com", "/users"));
console.log("200 is Success:", isSuccessCode(200));
console.log("404 is Success:", isSuccessCode(404));
logTestStep("Navigate to login page");
