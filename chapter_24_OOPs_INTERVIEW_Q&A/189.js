class Environment{
    constructor(name="staging",port=3000){
        this.name=name;
        this.port=port;
    }

    getURL(){
        return "https://"+this.name+":"+this.port;
    }
}

let env1 = new Environment();
console.log(env1.getURL());

let env2 = new Environment("production",8000);
console.log(env2.getURL());
