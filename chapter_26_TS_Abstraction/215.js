class Car {
    //Parametrized constructor
    constructor(assigned_name){
        this.name=assigned_name
    }
    eat(){};
}

let h = new Car("i10")
console.log(h.name)
h.eat()