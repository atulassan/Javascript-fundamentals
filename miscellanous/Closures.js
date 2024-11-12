//https://saurabhnativeblog.medium.com/difference-between-closure-and-lexical-scope-in-javascript-with-example-894dd7806c5f

//Closures and lexical scope

// A function define inside another function will able to access outer function variables this method is called lexical scope

/*In JavaScript, closures and lexical scope are related concepts, but they are not the same thing.

Lexical Scope:
Lexical scope is a fundamental concept in JavaScript that defines the accessibility and visibility of variables in a particular context, based on where they are defined in the code. In JavaScript, the scope of a variable is determined by its location within the code's nested functions.

Here's an <example:></example:>*/


function outerFunction() {
    const outerVar = 'I am from the outer function';
  
    function innerFunction() {
      const innerVar = 'I am from the inner function';
      console.log(outerVar); // Output: I am from the outer function
    }
  
    innerFunction();
  }
  
  outerFunction();

/*
  Closures

  Closure is a combination of a function and the lexical environment in which it was defined. In other words, a closure is a function that has access to variables in its outer (enclosing) function scope, even after the outer function has returned. Closures are created every time a function is defined in JavaScript, and they are used to create private variables and methods.
  
  Here’s an example:*/
  
  function createCounter() {
    let count = 0;
  
    return function() {
      count++;
      console.log(count);
    }
  }
  
  const counter1 = createCounter();
  const counter2 = createCounter();
  
  counter1(); // Output: 1
  counter1(); // Output: 2
  counter2(); // Output: 1
  
  /*In this example, createCounter() returns an inner function that has access to the count variable, which is defined in the outer function. When createCounter() is called, a new count variable is created in the lexical environment of the inner function, and it retains its value between calls. The counter1() and counter2() variables are assigned to the returned function, which creates two separate closures. Each time a counter is called, it increments its respective count variable and logs it to the console.
  
  In summary, lexical scope and closures are two fundamental concepts in JavaScript. Lexical scope defines the accessibility and visibility of variables based on their location in the code's nested functions. Closures are functions that have access to variables in their outer function scope, even after the outer function has returned. Closures are created every time a function is defined, and they're used to create private variables and methods.*/



function a() {
    let a = 2;
    function b() {
        console.log(a);
    }
}

let c = a(); // result: [function c]
console.log(c) // result: [function c]
console.log(c()) // calling inside b function and print the value 2

function greet() {
    let name = 'ramesh'
    function displayName() {
        let age = 35;
        console.log(`Iam ${name}`);
        function age() {
            console.log(`my age is ${age}`);
        }
        return age
    }
    return displayName;
}






