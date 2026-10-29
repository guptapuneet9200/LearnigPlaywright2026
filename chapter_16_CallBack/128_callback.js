function placeOrder(item,callback){
    console.log("Order Placed.......");
    callback()
}

placeOrder("Burger",function(){
    console.log("Order is ready, Pick it up!");
})
