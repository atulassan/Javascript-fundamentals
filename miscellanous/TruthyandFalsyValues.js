/* Falsy Values
false,
0 (zero)
-0 (minus zero)
0n (BigInt zero),
'', "", `` (empty string),
null,
undefined,
Nan (not a number)
*/


let a = 2;
let c = {}; //if(c) -> Uncaught SyntaxError: Invalid or unexpected token

if(a) {
    console.log('I am truthy')
} else {
    console.log('I am falsy')
}

//print I am trythy;

let b = '';

if(b) {
    console.log('I am truthy')
} else {
    console.log('I am falsy')
}

//print I am falsy;

(function() {
    if((-100 && 100 && '0') || [] == true || 0) {
        console.log(1);
        if([] || (0 && false)) {
            console.log(2)
        }
        if(Infinity && NaN && "false") {
            console.log(3);
            if("") {
                console.log(4)
            }
        } else {
            console.log(5);
            if(({} || false === "") && !(null && undefined)){
                console.log(6);
            }
        }
    }
})()