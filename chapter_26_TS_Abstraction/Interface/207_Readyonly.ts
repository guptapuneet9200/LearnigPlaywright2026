// Readonly-> once we define then we can't define again


interface Point{
    readonly x:number;
    readonly y:number;
}

const point: Point = {
    x:10,
    y:20
};

// point.x = 5; // con't modify