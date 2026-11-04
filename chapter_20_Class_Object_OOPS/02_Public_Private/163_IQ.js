class APIClient{

    constructor(baseURL){

        this.baseURL = baseURL;
    }

    get(path){
        return this.baseURL + path;
    }


}

let staging = new APIClient("https://staging.api.com");
let production = new APIClient("https://production.api.com");

console.log(staging.get("/users"));
console.log(production.get("/prod/users"));