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