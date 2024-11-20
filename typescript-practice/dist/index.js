"use strict";
//String
let gtlm = 'testing';
//Number
let gtstr = 2;
//Boolean
let getBl = true;
//Arrays
//single Array
let getArr1 = [1, 2, 3, 4, 5];
//2 dimentional Array
let getArr2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//Tuples
let getTpls = ['string', 2, false];
//Never
function abcd() {
    while (true) {
        console.log("infinite run");
    }
}
//abcd();
//Void -> for function does not have any return values
function ab() {
    console.log('Hey');
}
//Enums
var Direction;
(function (Direction) {
    Direction["top"] = "Top";
    Direction["bottom"] = "Bottom";
    Direction["left"] = "left";
    Direction["right"] = "right";
})(Direction || (Direction = {}));
//Type Inference -> Typescript automatically detected the type of the variable if you assign any values to variable
let a1 = 'string';
let a2 = 12;
let a3 = false;
//Union Intersaction Types
let s1 = 'accepted string';
s1 = 12;
function s3(ac) {
    console.log(ac);
}
let a = {
    section: 'development',
    name: 'Athavulah'
};



