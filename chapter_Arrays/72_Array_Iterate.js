let tests = ["login","checkout", "Search"];

// for(let i=0;i<tests.length;i++){
//     console.log(i,tests[i]);
// }

// for(test of tests){
//     console.log(test);
// }

// for(let test in tests){
//     console.log(test, "->" ,tests[test]);
// }

//Output is 
// 0 -> login
// 1 -> checkout
// 2 -> Search

// for(let test in tests){
//     console.log(test);
// }

//Output is 
// 0
// 1
// 2

tests.forEach((test,index) => {

  console.log(`${index} : ${test}`);
});

tests.forEach((test) => {

  console.log(`${test}`);
}); 