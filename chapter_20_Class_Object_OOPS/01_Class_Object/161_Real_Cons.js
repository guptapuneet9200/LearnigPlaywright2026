class TestCase{

    constructor(name,status,priority){
        this .name = name;
        this.status = status;
        this.priority = priority;
    }

    display(){

        console.log(this.name + " -> " + this.status + " -> " + this.priority);

    }
}

let login_ref = new TestCase("Login Test","Pass","P0");

let signU_ref = new TestCase("SignUp Test", "Fail", "P1");

login_ref.display();
signU_ref.display();
