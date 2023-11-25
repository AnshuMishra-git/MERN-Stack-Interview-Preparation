// JS Closure Concept
// In JavaScript, a closure is a function that has access to variables from its outer (enclosing) scope, even after the outer function has finished execution. This means that a closure allows a function to "remember" the environment in which it was created.

// A Closure is the Combination of a Function bundled Together (enclosed) with refrences to its surrounding state (lexical envoirment).

// A Closure give you access to another function scope from an inner function, It Does Created on Creation time of Function

// =====================  Implementation of Closure ======================

// Syntax 1
// function outerFunction() {
//   var tempVariable = 67;
//   function innerFunction() {
//     console.log("tempVariable", tempVariable);
//   }
//   tempVariable = 76;
//   return innerFunction;
// }

// var callingFunction = outerFunction();

// callingFunction();
// O/p => 67 Because of Closure Its returning with Function along with the Lexical Scope that get retured.

// Closure Does return the Refrence of Variable not the Exjact the Variable

// Syntax 2
function outerFunction() {
  var tempVariable = 67;
  return function innerFunction() {
    console.log("tempVariable", tempVariable);
  };
}

var callingFunction = outerFunction();

callingFunction();
