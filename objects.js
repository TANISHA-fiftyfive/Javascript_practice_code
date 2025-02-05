//Object Literals & Properties

const person ={
    firstName:'john',
    lastName: 'doe',age:30, hobbies:['music','movies','sports'], 
    address:{
        street: '50 main st', city: 'boston',
        state: 'MA'
    }
}

//Object Methods
console.log(Object.keys(person));   //Returns an array of an object’s keys.
console.log(Object.values(person)); //Returns an array of an object’s values.
console.log(Object.entries(person)); //Returns an array of key-value pairs.

const { firstName,lastName}=person; //Extract properties from an object into variables.
console.log(firstName);
console.log(lastName);

const {address:{city}}=person;//extracts city 
console.log(city);

