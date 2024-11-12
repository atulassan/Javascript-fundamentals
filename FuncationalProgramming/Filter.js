

//get Even numbers

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let getEvenNumbers = numbers.filter((n)=> {
    return n % 2 === 0
});

console.log(getEvenNumbers) // [ 2, 4, 6, 8 ]

//get Odd Numbers

let getOddNumbers = numbers.filter((n)=> {
    return (n % 2 === 0) === false // OR return !(n % 2 === 0)
});

/*let getOddNumbers = numbers.filter((n)=> {
    return !(n % 2 === 0)
});*/

console.log(getOddNumbers);  // [ 1, 3, 5, 7, 9 ]