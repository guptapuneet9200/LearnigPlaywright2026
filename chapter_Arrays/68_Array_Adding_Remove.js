let arr = [1,2,3];
console.log(arr); //[1,2,3]

// Push- Add element at last
arr.push(4);
console.log(arr); //[ 1, 2, 3, 4 ]

//POP- remove element at last
arr.pop();
console.log(arr); //[ 1, 2, 3 ]

arr.push(4,5);
console.log(arr); //[ 1, 2, 3, 4, 5 ]

// Shift- remove element from Beginning

arr.shift();
console.log(arr); //[ 2, 3, 4, 5 ]

//unshift- Add element at Beginning
arr.unshift(0);
console.log(arr); //[ 0, 2, 3, 4, 5 ]

arr.unshift(7,8);
console.log(arr); //[ 7, 8, 0, 2, 3, 4, 5]

//Splice - remove/insert element at anywhere

arr.splice(2,0);
console.log(arr); //[ 7, 8, 0, 2, 3, 4, 5]

arr.splice(2,1);
console.log(arr); //[ 7, 8, 2, 3, 4, 5 ]

arr.splice(2, 0, 99);
console.log(arr); //[ 7, 8, 99, 2, 3, 4, 5 ]

arr.splice(2, 1, 100);
console.log(arr); //[ 7, 8, 100, 2, 3, 4, 5 ]

arr.splice(1, 2, 10, 20);
console.log(arr); //[ 7, 10, 20, 2, 3, 4, 5 ]

arr.splice(-1, 0, 1);
console.log(arr); //[ 7, 10, 20, 2, 3, 4, 1, 5 ]

arr.splice(-1, 1, 1);
console.log(arr); //[ 7, 10, 20, 2, 3, 4, 1, 1 ]

arr.splice(-3, 2, 8);
console.log(arr); //[ 7, 10, 20, 2, 3, 8, 1 ]
