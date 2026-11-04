// Private Fields (#) — Hidden Data
// PUBIC Fields 
let v = 10;
class Credentials {
    #apiKey; // Instance or Class variable no need to require let, const, var here in JS.
    user;
    constructor(user, key) {
        this.user = user; // public
        this.#apiKey = key;
    }
    // Custom made fuction by us
    pramodgetAuthHeader() {
        return "Bearer " + this.#apiKey;
    }
}
let cred = new Credentials("admin", "scret_key_1234");
// console.log(cred.apiKey); 
// console.log(cred.#apiKey); 
console.log(cred.user);