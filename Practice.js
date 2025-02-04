 // var
 var x = 10;
 console.log(x);
 var x = 20;
 console.log(x);
 x=50;
 console.log(x);

 // let
 let y = 30;
 console.log(y);
 y = 40;
 console.log(y);
//  let y=60;

 //const
 const z=50;
 console.log(z);
 // z=60;
 // const z=70;

 // function for var
 function fun()
 {
    var a=100;
    if(true)
    {
        var a=200;
        console.log(a);
    }
    console.log(a);
 }
 fun();
// function for let
function fun2()
{
   let b=300;
   if(true)
   {
       let b=400;
       console.log(b);
   }
   console.log(b);
}
fun2();

//function for const
function fun3()
{
   const c=600;
   if(true)
   {
       const c=700;
       console.log(c);
   }
   console.log(c);
}
fun3();

console.error("this is an error");
console.warn("this is an warning");

//String
const name='Tanisha, goyal';
const age=22;
//concatenation
console.log('My name is '+ name + ' and I am '+age);
//template string
const hello=`My name is ${name} and I am ${age}`;
console.log(hello);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substring(0,5));
console.log(name.substring(0,5).toUpperCase());
console.log(name.split(', '));

//Array
const numbers=new Array(1,2,3,4,5);
console.log(numbers);

const fruits=['Apple','Orange','pears'];
fruits[3]='grapes';
fruits.push('mango');
fruits.unshift('strawberries');
fruits.pop();
console.log(Array.isArray('hello'));
console.log(fruits.indexOf('Orange'));
console.log(fruits);

//Object
const person ={
    firstName:'john',
    lastName: 'doe',age:30, hobbies:['music','movies','sports'], 
    address:{
        street: '50 main st', city: 'boston',
        state: 'MA'
    }
}
console.log(person.firstName,person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);
const { firstName,lastName}=person;//extracts firstName and lastName to access directly by storing them in separate variables.
console.log(firstName,lastName);
const {address:{city}}=person;//extracts city 
console.log(city);
person.email='john@example.com';
console.log(person);

//Array and objects
const todos=[
    {
        id:1,
        text:'Take out trash',
        isCompleted:true
    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted:true
    },
    {
        id:3,
        text:'Dentist appt',
        isCompleted:false
    }
];
console.log(todos);
console.log(todos[1].text);

const todoJSON=JSON.stringify(todos);//converts array object into json format
console.log(todoJSON);

//for loop
for(let i=0;i<=10;i++)
{
    console.log(`for loop number:${i}`);
}
for(let i=0;i<todos.length;i++)
{
    console.log(todos[i].text);
}
for(let todo of todos)
{
    console.log(todo.text);
    console.log(todo.id);
}

//forEach
todos.forEach(function(todo){
    console.log(todo.text);
}); 

// map
const todoText=todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

//filter
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted===true;
});
console.log(todoCompleted);

//filter with only text
const todoCompleted2 = todos.filter(function(todo){
    return todo.isCompleted===true;
}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted2);

//while
let i=0;
while(i<10)
{
    console.log(`while loop number:${i}`);
    i++;
}

//=== operator
const num1='10';
let num2=10;
if(num1===num2)
{
    console.log("equal");
}
else{
    console.log("not equal");
}

//ternary operator
const num3=9;
const color=num3>20?'red':'blue';
console.log(color);

//switch case
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;        
}


