let n=3;

//logic=> https://www.youtube.com/watch?v=--nIJwLDme4&list=PLlhM4lkb2sEiScGRZEHkHsI1ncXKLq5Zp&index=3

for(i=0;i<n;i++){

    for(j=n-1;j>i;j--){

        process.stdout.write(" ");
    }

    for(j=0;j<=i;j++){

        process.stdout.write("*")
    }

    console.log(" ");
}

console.log("----------Reverse----------------");

for(i=0;i<n;i++){

    for(j=0;j<=i;j++){

        process.stdout.write(" ");
    }

     for(j=n;j>i;j--){

        process.stdout.write("*");
    }
    console.log("")
}