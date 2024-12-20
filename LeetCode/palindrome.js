
//First Method

function palindrome(s) {
    let left = 0
    let right = s.length -1;
    while(left < right) {
        console.log(s[left], s[right]);
        console.log(left, right);
        if(s[left] != s[right]) {
            return false
        }
        left++
        right--;
    }
  return true;  
}

palindrome('scoocs'); //result true

//Second Method

function palindrome2(str) {
    let reverseStr = str.split('').reverse().join('');
    console.log(reverseStr);
    return (str == reverseStr) ? true : false;
}

console.log(palindrome2('madam'));

function palindromex(str) {
    let i = 0;
    let j = str.length-1;
    if(str.length % 2 != 0) {
        return false;
    }
    while(i<j) {
        if(str[i] != str[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

const pt = (str) => str.split('').reverse().join('') == str;

console.log(pt('siis'));
console.log(palindromex('sissis'));