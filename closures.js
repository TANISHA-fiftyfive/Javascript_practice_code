//Closures
// A closure is a function that "remembers" its lexical scope (the scope in which it was created), 
// even when it's executed outside of that scope.
function outerFunction() {
    let counter = 0; // Local variable in the outer function
    return function innerFunction() {
      counter++; // Accessing the outer function's variable
      console.log(counter);
    };
  }
  
  const closureFunc = outerFunction();
  closureFunc(); 
  closureFunc();
  closureFunc();
  