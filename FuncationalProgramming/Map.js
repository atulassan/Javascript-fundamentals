/* Map method

Map will loop through every element of your array and will perform specific operations that you have provided

Map method will always return you a new array with your results

*/

let num = [1, 2, 3, 4, 5];

const getForeachNums = num.forEach((n)=> n+2);

console.log(num, getForeachNums);

/*const getSquareNums = num.map((n)=> n*n);

console.log(getSquareNums);*/


function getSquareWidth(a) {
    return function(b) {
        return a*b;
    }
}

console.log(getSquareWidth(20)(50));

function getSquareWidthInfinity(a) {
    return function(b) {
        return b ? getSquareWidthInfinity(a+b) : a;
    }
}

console.log(getSquareWidth(20)(50));
console.log('+++++++', getSquareWidthInfinity(1)(2)(3)(4)(5)());






