class BasePage{

    constructor(pageName){
        this.pageName = pageName;
    }

    open(){
        console.log("Open the page")
    }

      close(){
        console.log("Close the page")
    }
}

class LoginPage extends BasePage{

}

let a = new LoginPage();
a.open();
a.close();
console.log("-------------");
let b = new BasePage();
b.open()