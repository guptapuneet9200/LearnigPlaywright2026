let grid = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
]

console.log(grid[0][0]) //10

console.log(grid[2][1]) //80
console.log(grid[1][2]) //60

// Change the value

grid[0][0] = 99
console.log(grid)

// Length of array
console.log(grid.length) //3

console.log(grid[0].length)  //3

console.log(grid[grid.length-1][grid[0].length-1]) //90

let testMatrix = [
    ["login","pass",200],
    ["checkout","fail",404],
    ["search","pass",180]
]

for(i=0;i<testMatrix.length;i++){
    for(j=0;j<testMatrix[i].length;j++){
        process.stdout.write(testMatrix[i][j]+" ");
    }
    console.log("");
}

 console.log("-------------");

 //Another way of for loop

 for(let row of testMatrix){

    for(let cell of row){

        process.stdout.write(cell+" ")
    }
    console.log("")
 }

 console.log("-------------");

 