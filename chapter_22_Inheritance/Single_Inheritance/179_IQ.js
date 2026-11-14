class BaseTest{

    constructor(){
        console.log("Parent")
    }

    setup(){
        console.log("Base: open browser")
    }

    teardown(){
        console.log("Base: close browser")
    }
}

class UITest extends BaseTest{

    constructor(){
        super();
    }
    setup(){
        super.setup();
        console.log("UI: maximize browser")
    }

    teardown(){
        console.log("UI: take screenshot")
        super.teardown()
    }

}

let a = new UITest()
a.setup()
a.teardown()