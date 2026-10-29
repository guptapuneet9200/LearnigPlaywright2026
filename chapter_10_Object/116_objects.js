let a = {status:"pass"};
console.log(a.status);
console.log(a["status"]);

let a1= {status:'pass'};
console.log(a1.status);

//Keys are case sensitive

let a2= {status:'pass', Status:'fail'};
console.log(a2.status);
console.log(a2.Status);

let b = a;
b.status = "fail";
console.log(a.status); //fail
console.log(b.status); //fail

console.log("===============");
let c = {status:"pass"};
let d = {status:"pass"};
console.log(c===d);

console.log("===============");

const t_json= {

    "name":"Punit",
    "age":30,
    "phone": 1234567890
};
console.log(t_json);

console.log("===============");

const t_js = {

    name : "Punit",
    age : 30
};
console.log(t_js);



