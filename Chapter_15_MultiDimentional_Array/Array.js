// 1-D Array

let arr = [1,2,3];

// 2-D Array

let mad = [
    [1,2,3]    //1*3
]

let grid=[

    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for(i=0;i<3;i++){
    for(j=0;j<3;j++){

        process.stdout.write(grid[i][j]+"")
    }
    console.log("")
}