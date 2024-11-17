
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