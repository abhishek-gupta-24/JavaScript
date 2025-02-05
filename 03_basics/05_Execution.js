//javaScript Execution Context
//1.Global Execution Context
//2. functional Execution Context


//Each Execution context is further divided into two
//1.memory creation phase
//2.Execution phase;





// In JavaScript, during the memory allocation (hoisting) phase, only variables declared 
// using var are initialized with undefined. 
// Let’s break this down step by step.

// JavaScript Execution Context
// Each JavaScript execution goes through two phases:

// Memory Creation Phase (Hoisting)
// The JS engine scans the code and allocates memory for variables and functions before execution starts.
// Variables declared using var are initialized to undefined.
// Variables declared using let and const are allocated memory but remain uninitialized (temporal dead zone - TDZ).
// Function declarations are fully stored in memory.
// Execution Phase
// The code is executed line by line.
// Example to Demonstrate This
// javascript
// Copy
// Edit
// console.log(a);  // ✅ undefined (Hoisted with 'undefined')
// console.log(b);  // ❌ ReferenceError: Cannot access 'b' before initialization
// console.log(c);  // ❌ ReferenceError: Cannot access 'c' before initialization

// var a = 10;
// let b = 20;
// const c = 30;
// Memory Phase for Above Code
// Variable	Hoisted?	Initial Value in Memory
// a (var)	✅ Yes	undefined
// b (let)	✅ Yes	Uninitialized (TDZ)
// c (const)	✅ Yes	Uninitialized (TDZ)
// var a is hoisted and initialized with undefined.
// let b and const c are hoisted but NOT initialized (they remain in the Temporal Dead Zone (TDZ)).
// Accessing b or c before their declaration throws a ReferenceError.
// Function Hoisting vs. Variable Hoisting
// javascript
// Copy
// Edit
// foo();  // ✅ Works! Function is fully hoisted

// function foo() {
//     console.log("Hello");
// }
// Function declarations are fully hoisted, so calling foo() before its definition works.
// var, let, and const are hoisted differently, as explained before.
// Key Takeaways
// var variables are hoisted and initialized to undefined.
// let and const are hoisted but NOT initialized, leading to a Temporal Dead Zone (TDZ).
// Function declarations are fully hoisted, meaning they can be used before their definition.
// Accessing let or const before declaration results in a ReferenceError.
// This behavior helps understand why var behaves differently from let and const in hoisting. 🚀