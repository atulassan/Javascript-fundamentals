function chunk(arr, size) {
    let index=0;

    while(index<arr.length) {
        console.log(arr.slice(index, index+size))
        index+=size;
        console.log(index, index+size, size)
    }
    
}

chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)