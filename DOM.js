//DOM
// console.log(window);

//single element
console.log(document.getElementById('myForm'));  //Selects an element by ID
console.log(document.querySelector('h2'));   //Selects the first <h2> element

//Multiple element
console.log(document.getElementsByClassName('item'));    //Selects elements by class name
console.log(document.querySelectorAll('.item'));     //Selects all elements with class 'item'
console.log(document.getElementsByTagName('li'));    //Selects all <li> elements

const items=document.querySelectorAll('.item');
items.forEach((item)=> console.log(item));   // Iterates over NodeList

const ul= document.querySelector('.items');
// ul.remove(); //removes entire <ul>
// ul.lastElementChild.remove(); //removes last child element
ul.firstElementChild.textContent='hello';    //changes first child's text
ul.children[1].innerText='brad';     //changes second child's text
ul.children[2].innerText='brad1';    //changes third child's text
ul.lastElementChild.innerHTML='<h1>helloo</h1>'; //changes last child's HTML

const btn=document.querySelector('.btn');
btn.style.background='red';  // Changes button background to red