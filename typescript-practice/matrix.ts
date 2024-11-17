
//required output // [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]

let mtArr: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(mtArr);

let getKeys: IterableIterator<number> = mtArr.keys();
let arr1: number[] = [];
let arr2: number[] = [];
let arr3: number[] = [];
console.log(getKeys);

for (let mt of getKeys) {
    if (mt === 2) {
        arr1.push(mtArr[mt][0]);
        arr2.push(mtArr[mt][1]);
        arr3.push(mtArr[mt][2]);
    }
    if (mt === 1) {
        arr1.push(mtArr[mt][0]);
        arr2.push(mtArr[mt][1]);
        arr3.push(mtArr[mt][2]);
    }
    if (mt === 0) {
        arr1.push(mtArr[mt][0]);
        arr2.push(mtArr[mt][1]);
        arr3.push(mtArr[mt][2]);
    }

    console.log(mt);
}

arr1.reverse();
arr2.reverse();
arr3.reverse();
console.log([[...arr1], [...arr2], [...arr3]]); //[ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]

