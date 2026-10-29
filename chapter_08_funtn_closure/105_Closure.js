function startBrowser() {

    let name= "edge";

    function installBrowser() {
     
        console.log(name);  //inner can access outer variable
    }
    return installBrowser();
  
 }
const runTC = startBrowser();
runTC();

installBrowser(); // inner function is not accessible outside

