
//first method
function reverseString1(str) {
    let revrseStr = "";
    for(let i =0; i<=str.length-1; i++) {
        revrseStr = str[i] + revrseStr
        console.log(i, str[i]);
    }
    console.log(revrseStr);
    return revrseStr;
}

reverseString1('Athavullah') // halluvahtA

//Second Method
function reverseString2(str) {
    let reverseStr = '';
    for(let char of str) {
        reverseStr = char + reverseStr;
    }
    return reverseStr;
}

reverseString2('Athavullah') // halluvahtA

//Third Method

function reverseString3(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString3('Athavullah')); // // halluvahtA

//how to reverse a nmumber

function reverseNo(n) {
    let reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n)    
}

console.log(reverseNo(-51));
