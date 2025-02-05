//Function Hoisting
//JavaScript moves function and variable declarations to the top before execution.

myFunction();   //function declaration hoisting

function myFunction() {
  console.log('function declaration hoisting');
}

myFunction(); // Error

var myFunction = function() {   //myFunction is not a function it is a variable
  console.log('function expression hoisting');
};

