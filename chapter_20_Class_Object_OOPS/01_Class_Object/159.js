class Car{

    //Default constructor

    // constructor(){

    // }

    //Parameterized constructor
    constructor(assigned_name){

        this.name = assigned_name;
    }
}

let hyundai_i10 = new Car("Hyundai i10");
console.log(hyundai_i10.name);

let hyundai_creata = new Car("Hyundai Creata");
console.log(hyundai_creata.name);

//Or, we can use const also
const a = new Car("i11");    
const b = new Car("Nexon");

//A class does not have same constructor multiple times. Below is the eample
// class Bad { constructor(a) {} constructor(b) {} }


class Bike {}
new Bike();   // Bike {}  — works fine, just has nothing in it