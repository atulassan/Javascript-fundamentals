//https://www.scaler.com/topics/course/javascript-beginners/video/304/

let sumCurried = function(x) {
    return function(y) {
        console.log(x+y);
    }
}

let sumTwoNumbers = sumCurried(2) // saying anonymous function because  we just simply return empty a function

sumTwoNumbers(5) // prints a value 7

function xWidth(x) {
    return function yWidth(y) {
        return x*y
    }
}

console.log(xWidth(5)(6));

//Infinciy Cuyrring

function sum(a) {
    return function(b) {
        if(b===null) return a;
        return sum(a+b);
    }
}

let sumSingleLine = a => b => b ? sum(a+b) : a;

console.log(sum(3)(4)(5)(6)(null));
console.log(sumSingleLine(3)(4)(5)(6)(null));

