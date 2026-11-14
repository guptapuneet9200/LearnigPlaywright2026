/*Abstraction can be achieve an 3-ways in below
1_Interface
2_ENUMS
3_Abstract Class
*/

interface User{
    name:string;
    age:number;
    email:string;
}

const user1:User={
    name:"John",
    age:30,
    email:"as@gmail.com"
}

const user2: User = {
    name: "John2",
    age : 56,
    email: "abc@gmail.com"
}

const user3: User = {
    name: "John3",
    age : 23,
    email: "abc@gmail.com"
}