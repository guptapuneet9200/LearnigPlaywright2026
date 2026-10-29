function add(a,b,c){
    return a+b+c;
}

let num = [1,2,3];
add(...num); // spread operator

console.log(add(...num)); // spread operator
