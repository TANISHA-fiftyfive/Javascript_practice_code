//Immediately Invoked Function Expressions

//regular function
(function() {
    console.log('regular function');
  })();

//regular function with parameters
(function(name) {
    console.log(`Hello ${name}!`);
  })('world');  

//Data Encapsulation
const result = (function() {
    let privateVariable = 10;
    return privateVariable * 2;
  })();
  
  console.log(result);
//console.log(privateVariable);
  // privateVariable is not accessible outside the IIFE  

//arrow function
(() => {
    console.log('arrow function');
  })();


  
  