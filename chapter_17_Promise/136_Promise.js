//Remember: The all promise program it will ask into the Interview

let order = new Promise(function(resolve,reject){

  //  let foodready = false; //Output-> UnhandledPromiseRejection
     let foodready = true; //Output-> Promise { 'Pizza is delivered' }
    if(foodready){
        resolve("Pizza is delivered");
    }else{
        reject("Order cancelled");
    }
});

console.log(order)