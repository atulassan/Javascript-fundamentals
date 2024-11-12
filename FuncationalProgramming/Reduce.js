// The accumulated result from the last call of the callback function.

let num = [1, 2, 3, 4, 5, 6];

let reduceMethod = num.reduce((acc, value)=> {
    let calTotal =  acc+ value;  
    return calTotal;
}, 0)

console.log(reduceMethod);

let reduceMethod1 = num.reduce((acc, value)=> {
    let calTotal =  acc* value;  
    return calTotal;
}, 1);

console.log(reduceMethod1);