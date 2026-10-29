

function garimaStory(item,CallMeWhenStoreIsEmpty){
    console.log("Store is busy");

    //.......

    console.log("Store is Empty");
    CallMeWhenStoreIsEmpty();
}

garimaStory("starting shopping",()=>{

    console.log("Let's start shopping....")
})