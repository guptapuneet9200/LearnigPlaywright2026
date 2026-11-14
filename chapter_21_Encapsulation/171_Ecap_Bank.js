class ICICI{
    #balnc;
    constructor(name,balance){
        this.name=name;
        this.#balnc=balance;
    }

    getBalnc(){
        return this.#balnc;
    }

    setBalnc(balance,isCashier){

        if(isCashier){
             this.#balnc = balance;
        }else{
            console.log("Not Allowed")
        }
    }
}

let p = new ICICI("Punit",1000);
console.log(p.getBalnc());
p.setBalnc(50000,true);
console.log(p.getBalnc());

//Or

// let p = new ICICI("Punit",1000);
// console.log(p.getBalnc());
// p.setBalnc(50000,false);
// console.log(p.getBalnc());