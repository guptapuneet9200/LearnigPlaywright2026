let arr = [5,3,7,9,2,1];

let max = arr[0];

for(i=1;i<arr.length;i++){

    if(arr[i]>max){
        max=arr[i];
    }
}

console.log(max);