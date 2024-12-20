function maxChars(str){
    let charObj = {}
    for(let char of str) {
       if(charObj[char]) {
        charObj[char] += 1;
       } else {
        charObj[char] = 1
       }
    }
    console.log(charObj); // { a: 4, s: 4, c: 8, d: 5, r: 5 }
    let i = 0, charName = '';
    for(const [key, val] of Object.entries(charObj)) {
        if(i < val) {
            i = val;
            charName = key;
        }
    }
    return charName; // c
    
}

maxChars('aaaassssccccccccdddddrrrrr');

function isCharExists(a,b) {
 let arrsplt = a.split('');
let cth = {}
 for(let char of arrsplt){
  if(cth[char]) {
   cth[char] = cth[char] + 1  
  } else {
    cth[char] = 1
  }
 }
 let findVal = null;
 for (const [key, val] of Object.entries(cth)) {
   console.log(key, val);
   if(key == b && val > 1) {
    findVal = key;   
   } 
 }
 return findVal != null ? true : false;
}

console.log(isCharExists('atha', 'a'));
maxChars('aaaassssccccccccdddddrrrrr'); // { a: 4, s: 4, c: 8, d: 5, r: 5 }


function maxChars1(str) {
    let chars = {};
    for(let char of str) {
        if(!chars[char]) {
            chars[char] = 1
        } else {
            chars[char]++;
        }
    }
    console.log(chars);
}

maxChars1('aaaabbbnsssse'); // { a: 4, b: 3, n: 1, s: 4, e: 1 }
