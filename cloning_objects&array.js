//cloning objects

const obj1 = { a: 1, b: 2 };
const obj2 = Object.assign({}, obj1);   //shallow copy(does not copy nested objects deeply)
console.log(obj2);

const obj3 = { a: 1, b: 2 };
const obj4 = { ...obj3 };   //shallow copy
console.log(obj4); 

const obj5 = { a: 1, b: { c: 2 } };
const obj6 = JSON.parse(JSON.stringify(obj5));  //deep copy(copies nested objects too)
console.log(obj6);
//here javascript object is converted into JSON string and JSON string is again converted into javascript object.


//cloning arrays

const arr1 = [1, 2, 3];
const arr2 = arr1.slice();  //shallow copy
console.log(arr2);

const arr3 = [1, 2, 3];
const arr4 = [...arr3];     //shallow copy
console.log(arr4);










