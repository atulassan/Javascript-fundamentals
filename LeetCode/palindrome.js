
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