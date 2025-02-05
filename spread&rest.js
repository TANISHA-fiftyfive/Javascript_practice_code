//spread operator
//to expand arrays or objects into individual elements

const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];  //Copying an Array 
console.log(newArr);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 }; //Merging Objects
console.log(mergedObj);

//Rest operator
//to collect multiple elements into an array.

function sum(...numbers) {  //Function Parameters
    return numbers.reduce((acc, num) => acc + num, 0);  
  }
  console.log(sum(1, 2, 3, 4)); 
  
const person = { name: "john", age: 22, city: "Delhi" };
const { name, ...details } = person;    //Object Destructuring
console.log(name);
console.log(details); 
