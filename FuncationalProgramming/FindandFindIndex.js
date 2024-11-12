// find return first element of an array that satisfy the condition

//Find Method

const trasactions = [1000, 2000, 3000, 4000, -898, 3800, -45000];

let getFindElement = trasactions.find((n)=> n<0); 

console.log(getFindElement)// result -898

//Find Index

let getFindIndexElement = trasactions.findIndex((n)=> n<0); // result -898

console.log(getFindIndexElement);
