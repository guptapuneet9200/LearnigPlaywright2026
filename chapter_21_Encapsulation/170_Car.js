class Car{

    #engine;
    constructor(name,engineName){
        this.name=name;
        this.#engine=engineName;
    }

    getEngine(){
        return this.#engine;
    }

    setEngine(newEngineName){
        this.#engine = newEngineName;
    }

}

let Tesla = new Car("Tesla","EV");
console.log(Tesla.getEngine());
Tesla.setEngine("Petrol");
console.log(Tesla.getEngine());
