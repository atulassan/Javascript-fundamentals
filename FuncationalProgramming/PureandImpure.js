//https://www.scaler.com/topics/course/javascript-beginners/video/266/

//what is a pure function?
/*
A pure funciton is a function which:

1. given the same input always returns the same input
2. Produces no site effects

*/

/* Pure Functions */

let x = 2;

function pureFuns(a) {
    return a+x
}

console.log(pureFuns(2)) // returns 4
console.log(pureFuns(2)) // returns 4
console.log(pureFuns(3)) // returns 5
console.log(pureFuns(3)) // return 5


/*Impure Function*/

function ImpureFunction(a) { // x value defined at top of the file
    x++;
    return a+x;
}

console.log(ImpureFunction(2)); // returns 5
console.log(ImpureFunction(2)); // returns 6
console.log(ImpureFunction(2)); // returns 7
console.log(ImpureFunction(2)); //returns 8