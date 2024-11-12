//https://www.scaler.com/topics/course/javascript-beginners/video/304/

let sumCurried = function(x) {
    return function(y) {
        console.log(x+y);
    }
}

let sumTwoNumbers = sumCurried(2) // saying anonymous function because  we just simply return empty a function

sumTwoNumbers(5) // prints a value 7

