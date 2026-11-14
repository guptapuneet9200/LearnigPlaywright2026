class Animal {

    count =0;
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is eating");
    }
    sleep() {
        console.log(this.name + " is sleeping");
    }
    foo(){
        console.log("Foo Called!");
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name); //. It is used for the parent constructor.
        this.breed = breed;
    }
    bark() {
        super.foo(); //It is used for call the parent function.
        console.log(this.name, " is barking!")
        //super.name //this is not allow b'coz automatic created by constructor
       //console.log(super.count)-> not allow it give undefined error
    }
}
let dog = new Dog("Rex", "Labrador");
dog.eat();
dog.sleep();
dog.bark();
console.log(dog.breed);