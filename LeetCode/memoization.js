
const memoizeAny = (func) => {
    // Use this variable memoizedKeyValues to save results
    // Identify each result with it's input.
    // If the memoized function is called with the same input, use the existing value.  
    let memoizedKeyValues = [
       /* {
            args: stringified_input_parameters
            result: result
        }*/
    ];
    // Return a function. When we memoized multiply below, we called this function, for each invocation of multiplication
    return (...args) => {

        // for the given input (params), check if there is a cached result
        let result = memoizedKeyValues.find( x => x.args === JSON.stringify(args))

        // YES, there is a cached result
        if(result){ 
            console.log("from cache", args);
            return result.result; // return cached result
        }

        // controls comes to this line only if there is no cached result.
        result = func.apply(this,args); // invoke the function

        // cache result
        memoizedKeyValues.push({
            args: JSON.stringify(args),
            result: result
        })

        // return the result
        return result;
    }
}

const multiply = memoizeAny((p1, p2) => {
    console.log("invoked original function", p1, p2);
    return p1 * p2;
});

console.log(multiply(10,30));// A new set of params. Performs multiplication and caches the result 
console.log(multiply(10,20));// A new set of params. Performs multiplication and caches the result
console.log(multiply(10,20));/* *** RETURNS CACHED VALUE *** */ 
console.log(multiply(10,10));// A new set of params. Performs multiplication and caches the result
console.log(multiply(10,20));/* *** RETURNS CACHED VALUE *** */

const memoize = (fn) => {
    let cache = {}
    return (...args) => {
        let cacheKey = args.map(n => n.toString() + '+').join('')
        if (cacheKey in cache) {
            return cache[cacheKey]
        } else {
            let result = args.reduce((acc, curr) => fn(acc, curr), 0);
            cache[cacheKey] = result;
            console.log(cache);
            return result;
        }
    }
}

const add = (a, b) => a + b

const memoizeAdd = memoize(add);

console.log(memoizeAdd(1,2,3,4))
console.log(memoizeAdd(1, 2))
console.log(memoizeAdd(5, 4))
console.log(memoizeAdd(1, 2))

console.log(memoizeAdd(5, 4))
console.log(memoizeAdd(5, 4))


console.log(memoizeAdd(6, 4))

console.log(memoizeAdd(6, 4))



function memoize(fn, spl) {
    const cache = new Map(); // Value cache stored in the closure.
        return function(...args) {
        // Create a string version of the arguments to use as a cache key.
            let key = `${args.length}${spl}${args.join(spl)}`;
            if (cache.has(key)) {
                console.log('In Cache', cache)
               return cache.get(key);
            } else {
                //let result = f.apply(this, args);
                let result = args.reduce((acc, val)=> fn(acc, val), (spl == '+' ? 0 : 1));
                cache.set(key, result);
                console.log('Not Cache', cache)
                return result;
            }
        };
   }
   
   const addMemoize = memoize((a, b) => a+b, '+');
   const multiplyMemoize = memoize((a, b) => a * b, '*');
   console.log(addMemoize(1, 2, 3, 4, 5));
   console.log(addMemoize(1, 2, 3, 4, 5));
   console.log(addMemoize(4, 2, 3, 4, 5));
   console.log(addMemoize(1, 2, 3, 4, 5));
   console.log(addMemoize(1, 2, 3, 4, 5));
   console.log(addMemoize(1, 2, 6, 4, 5));
   console.log(multiplyMemoize(1, 2, 3));
   console.log(multiplyMemoize(1, 2, 3));

   /*const memoizeAny = (fn, smbl) => {
    let cache = new Map();
    return function(...args) {
        let key = `${args.length}l${smbl}${args.join('|')}`;
        if(cache.has(key)) {
            console.log('In cache', cache);
            return cache.get(key)
        } else {
            let result = args.reduce((acc, val)=> fn(acc, val), smbl === '*' ? 1 : 0);
            console.log('Not cache', cache);
            cache.set(key, result);
            return result;
        }
    }
}

const sum = memoizeAny((a,b)=> a+b, '+');
const multiply = memoizeAny((a,b)=> a*b, '*');

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3));
console.log(sum(3, 4, 5));
console.log(sum(1, 2, 3));
console.log(multiply(1, 2, 3));
console.log(multiply(1, 2, 4));
console.log(multiply(3, 4, 4));
console.log(multiply(3, 4, 4));*/