let arr = [5,1,2,1,3,2];


for ( i=0;i<arr.length;i++){
let maxCount=0;
    for(j=0;j<arr.length;j++){

        if(arr[i]==arr[j]){
            maxCount++;             
        }      
    }
     console.log(arr[i],"appear",maxCount,"times");
}

