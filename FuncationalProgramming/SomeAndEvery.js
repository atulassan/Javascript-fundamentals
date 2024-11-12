//Some method

//Some: COndition check: To get true or false based on a condition
// it will return true if true 1 or more that 1 element satisfies the condition

const trasactions = [-1000, -2000, 3000, -4000, -5000, -6000];

let resultSome = trasactions.some((n)=> n>0);

console.log(resultSome) // true --> read CareFull -> any one match returns true

const trasactionsOverall = [-1000, -2000, 3000, -4000, -5000, -6000];

let resultEvery = trasactions.some((n)=> n>0);

console.log(resultEvery) // false --> read carefull -> need to match all the elements then only every resturn true or else you are getting false