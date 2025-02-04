//functions
function addNums(number1,number2){      //function declaration
    console.log(number1+number2);
}
addNums(5,4);

//Arrow functions
const add1=(number3,number4)=>{
    return number3+number4;     //standard arrow function with explicit return
}
console.log(add1(5,5));

const add2=(number5,number6)=> console.log(number5+number6);       // single-line arrow function
add2(5,8);

const add3=(number7,number8)=> number7+number8;     //implicit return
console.log(add3(10,20))

const add4=number7=>number7+5;      // single parameter arrow function
console.log(add4(5));

//anonymous function or function expression
const add = function(a, b) {        //anonymous function has no name and is often assigned to a variable. 
    return a + b;
};
console.log(add(3, 4));

//Constructor function
function Person(first_Name,last_Name,dob){
    this.first_Name=first_Name;     //this points to the current object i.e window object
    this.last_Name=last_Name;
    // this.dob=dob;        
    this.dob= new Date(dob);    // Storing date as a Date object instead of a string
    // this.getBirthYear=function(){
    //     return this.dob.getFullYear();
    // }
    // this.getFullName=function(){
    //     return `${this.first_Name} ${this.last_Name}`;
    // }
}
// Prototype method implementation (more efficient than defining in the constructor)
Person.prototype.getBirthYear=function(){   //adds a shared method to all instances of the Person constructor without duplicating it in each instance.
    return this.dob.getFullYear();      //// Prototype method implementation
}
Person.prototype.getFullName=function(){
    return `${this.first_Name} ${this.last_Name}`;//Optimized method definition
}

//Instantiate object
const person1=new Person('john','doe','4-3-1924');
const person2=new Person('mary','smith','3-6-1970');
console.log(person2);
console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person2.getFullName());
console.log(person1);

//Classes

//we can also write above code inside a class or using class
// class Person{
//     constructor(first_Name,last_Name,dob){
//     this.first_Name=first_Name;
//     this.last_Name=last_Name;
//     this.dob= new Date(dob);
//     }
//     getBirthYear(){
//         return this.dob.getFullYear();
//     }
//     getFullName(){
//         return `${this.first_Name} ${this.last_Name}`;
//     }
// }
// const person1=new Person('john','doe','4-3-1924');
// const person2=new Person('mary','smith','3-6-1970');
// console.log(person2.getFullName());
// console.log(person1);

