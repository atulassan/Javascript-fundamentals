/*
what is a call back function

In javascript, a callback function is a function that is passed into another function as an argument. This function can then be invoked at a later stage of time.

SINce in javascript, functions are objects, function can be passed as arguments
*/

function printFirstName(firstName, cb) {
    consonle.log(printFirstName);
    cb(`${firstName} ${lastName}`)
}

function printLastName(lastName) {
    console.log(lastName)
}

printFirstName('Athavullah', 'Atulassan')