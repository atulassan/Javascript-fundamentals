function chunk(arr, size) {
    let index=0;
let tchnk = [];
let arr1 = [], arr2 = [], arr3 = [];
    while(index<arr.length) {
        //tchnk.push(arr.slice(index, index+size));
        //console.log(Object.entries(arr.slice(index, index+size)));
        for(const [key, val] of Object.entries(arr.slice(index, index+size))) {
            console.log(`key: ${key}, value: ${val}`);
            if(key==2){
                arr1.push(val)
            }
            if(key==1) {
                arr2.push(val)
            }
            if(key==0) {
                arr3.push(val)
            }
        }
        //console.log(arr.slice(index, index+size))
        index+=size;
        //console.log(index, size, index+size)
    }
    arr1.reverse()
    arr2.reverse()
    arr3.reverse()
    console.log(arr1, arr2, arr3);

    return [[...arr1], [...arr2], [...arr3]] //[ [ 9, 6, 3 ], [ 8, 5, 2 ], [ 7, 4, 1 ] ]
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)) //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]