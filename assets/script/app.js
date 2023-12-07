'use strict';

// ! DOM 1

/**
 * JavaScript in the browser is three things:
 * 1. ECMAScript
 * 2. DOM (Document Object Model)
 * 3. BOM (Browser Object Model)
 *
 * DOM is how JavaScript sees documents (structure, content, style)
 * The DOM represents the document as nodes and objects; that way,
 * JavaScript can interact with the web page.
 *
 */

// * See the following conso.log in the browser console:
console.log(`Hi`);
console.log(document);
console.log(document.characterSet);
console.log(document.head);
console.log(document.cookie);

console.log(window.navigator);
console.log(window.screen);
console.log(window.innerWidth);
console.log(window.innerHeight);

// Iterating through an array and copying elements
const array = ['item1', 'item2', 'item3'];

// Loop through the 'array' and copy each element
for (let i = 0; i < array.length; i++) {
  const element = array[i];
}

// Creating an array of pizza toppings
const toppings = ['Pineapple', 'Olives', 'Garlic'];

// Copying 'toppings' array using Array.from
const names = Array.from(toppings);

// A function to log the 'brand' parameter
function getTime(brand, hours) {
  console.log(brand); // Log the 'brand' parameter
  console.log(hours); // Log the 'brand' parameter
}

// ! DOM 2
/**
 * Getting access to HTML elements
 * <div> -------- js code
 *
 * There are three methods to get access to HTML elements:
 * 1. getElementById('theIdHere') -> JS object
 * 2. querySelector('') -> id, class, element -> JS object
 * 3. querySelectorAll('') -> list of elements (li's, p's, elements with
 * the same class)
 */

// * Using getElementById('') to get access to an element
// The first step is to get the element and store it in a variable
const firstP = document.getElementById('one');
const secondP = document.getElementById('two');

// Next, create a function to change the color of the element
function paintPurple() {
  firstP.style.color = '#b84eff';
}
// We are using Obsructive JavaScript here to call the function in the HTML

// * Unobstrusive JavaScript: JavaScript is separated from HTML.
// It allows a more clear distinction between the languages.
secondP.onclick = function () {
  this.style.color = '#33ab4e';
};

// * Best and most Popular approach
// Get the element and store it in a variable.
// The element is: <p id="three">Click me to make me orange</p>
const thirdP = document.getElementById('three');
// Add the event listener to the element with an id 'three'
thirdP.addEventListener('click', function () {
  this.style.color = '#ff833c';
});

// * You can also use querySelector to get access to an element
// querySelector is flexible because it can find an element by its id, class,
// and the element name (selector). For example:
const sectionId = document.querySelector('#section'); // section by id
const sectionClass = document.querySelector('.section'); // section by class
const sectionElem = document.querySelector('section'); // section by element

// todo: Add a random color to the <body> each time you click the button
// Get the element and store it in a variable
// <button id="random"><i class="fas fa-palette"></i></button>
const btn = document.getElementById('random');

// Create a function that returns a number between 0 and 255 and use it
// to change the color of the body
function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 256);
  return randomNumber;
}

// Add the event listener to the element with an id 'btn'
btn.addEventListener('click', function () {
  document.body.style.backgroundColor = `rgb(${getRandomNumber()}, 
	${getRandomNumber()}, ${getRandomNumber()})`;
});

// todo: Each time you click the button, add a new <p>
// * Appending an element
// Get the elements and store them in a variable
const addBtn = document.getElementById('add');

// Add the event listener to the element with an id 'add'
addBtn.addEventListener('click', function () {
  // Create a new HTML element
  let newParagraph = document.createElement('p');
  // Add the text to the new element
  newParagraph.appendChild(document.createTextNode("I'm a new paragraph"));
  // Append the new element to the parent element
  thirdP.appendChild(newParagraph);
});

// ! DOM 3
// Getting the elements and storing them in variables
const showMsgBtn = document.querySelector('.show-msg-btn');
const toggleMsgBtn = document.querySelector('.toggle-msg-btn');
const hiddenMsg = document.getElementById('hidden-message');
const toggleColorParagraph = document.getElementById('red-white');

// Adding event listeners on event: click
showMsgBtn.addEventListener('click', () => {
  hiddenMsg.classList.add('is-visible');
});

toggleMsgBtn.addEventListener('click', () => {
  hiddenMsg.classList.toggle('is-visible');
});

toggleColorParagraph.addEventListener('click', function () {
  this.classList.toggle('red'); // toggle adds and removes the class
  if (this.classList.contains('red')) {
    toggleColorParagraph.innerText = 'Click me to make me white';
  } else {
    toggleColorParagraph.innerText = 'Click me to make me red';
  }
});

// ! DOM 4
const list = document.getElementById('list');
// You can also use the querySelectorAll method
// const list = document.querySelectorAll('li');

// * childNodes
/**
 * childNodes will return an array-like structure called a Node list.
 * childNodes will return all elements inside the list (elements
 * and nodes)
 */
const items = list.childNodes;
console.log(items); // returns a NodeList

// Todo: Click each one of the list names and use them in a message.
// Iterating through the list of nodes (elements) and 'listening'
// to each one of them. We are listening for the click event.
items.forEach((item) => {
  item.addEventListener('click', function () {
    alert(`Hi, my name is ${this.innerText}!`);
  });
});

// ! DOM 5
// Here we will use JavaScript to create HTML elements.
// We will create elements inside an empty <section> element.

// Getting the HTML elements and storing them in variables
const article = document.querySelector('article');
const emptySection = document.querySelector('#empty-section');

// Todo: let's append a paragraph inside the section element
// ! Using createElement() method
const paragraph = document.createElement('p');
const content = document.createTextNode(
  'I am a JS generated paragraph using createElement()'
);
paragraph.append(content);
article.append(paragraph);
// ! Using innerHTML method (easiest way)
// Use innerHTML to add HTML to an element (easiest way)
// converts a string into an element
const newPar = '<p>I am a JS generated paragraph using innerHTML</p>';
emptySection.innerHTML = newPar;

// ! DOM 6
// * Calculate the sum of two numbers (Calculator)
// Working with forms

const form = document.querySelector('form');
const firstNumber = document.querySelector('.number-one');
const secondNumber = document.querySelector('.number-two');
const result = document.querySelector('.result');
const output = document.querySelector('.output p');

let count = 0; // Initialize the count variable

// Create a function to validate an input
// Do not accept empty strings before or after.
// Accept only positive numbers.
function isNumber(str) {
  let input = str.trim();
  if (input.length > 0 && !isNaN(input)) {
    return true;
  }
  return false;
}

// Adding an event listener to the variable result
result.addEventListener('click', function () {
  let a = firstNumber.value;
  let b = secondNumber.value;
  console.log(a, b);
  console.log(isNumber(a), isNumber(b));
  if (isNumber(a) && isNumber(b)) {
    let res = parseFloat(a) + parseFloat(b);
    output.innerText = `${a} + ${b} = ${res}`;
    firstNumber.value = '';
    secondNumber.value = '';
  } else {
    if (count > 3) {
      output.innerText = 'Fun fact: a letter is not a number';
    } else {
      output.innerText = 'Please enter a valid number';
    }
  }
  count++;
});

// ! DOM 7 (Event propagation and form with mirror input)
/**
 * * Event propagation
 * Event propagation or event bubbling is the concept of events
 * propagating from the element that was clicked to the parent
 * element. For example, if you click on a list item, the event
 * will propagate to the <ul> element.
 *
 * * The following method helps you avoid event propagation
 */
const newItems = document.querySelectorAll('#new-list li');
// If you only type ('#new-list') and you click on the empty space
// between the list items, you will get the <ul> element in the console.
// ! ('#new-list li') avoid event propagation.

console.log(newItems); // NodeList(4) [ li, li, li, li ] - An array-like object
console.log([...newItems]); // [ li, li, li, li ] - spread, a real array

newItems.forEach((item) => {
  item.addEventListener('click', function (event) {
    console.log(event.target.innerText);
  });
});

// * Form
const myInput = document.querySelector('#mirror-input');
const mirrorOutput = document.querySelector('.mirror-output p');

// Get rid of the text inside the input field after the page loads
window.addEventListener('load', function () {
  myInput.value = '';
});

// I want to enter something and print it out
// You can use the 'input' event instead of keyup or keydown
myInput.addEventListener('input', function (event) {
  mirrorOutput.innerText = event.target.value.trim();
});

/**
 * JavaScript sees elements as nodes in a tree structure called
 * the DOM (Document Object Model). The DOM is a representation
 * of the HTML elements in a page that JavaScript can access and
 * manipulate. The DOM is not part of JavaScript; it is a separate
 * entity that JavaScript can use to access HTML elements.
 *
 * * First phase: Getting elements and storing them in variables
 * This phase connects JavaScript to the HTML elements. For example:
 * const list = document.getElementById('list');
 *
 * Eventhough JavaScript has access to all the elements in the DOM,
 * we need to tell JavaScript which elements we want to work with. This
 * is the first step in working with the DOM, getting each element. You can
 * use the following methods to get elements:
 *
 * 1. getElementById() - returns the element with the specified ID.
 * 2. querySelector() - returns the first element that matches a
 * specified CSS selector(s) in the document.
 * 3. querySelectorAll() - returns all elements in the document that
 * matches a specified CSS selector(s). The elements are returned as a
 * NodeList object (an array-like object).
 *
 * * Second phase: Adding event listeners
 * This phase adds event listeners to the elements. An event listener is
 * a procedure or function in a computer program that waits for an event
 * to occur. For example, a click event. When the event occurs, the event
 * listener will execute the code inside it. For example:
 *
 * list.addEventListener('click', function (event) {
 *  console.log(event.target);
 * });
 *
 *
 * Some examples of events are:
 *  - click
 *  - dblclick
 *  - mouveover
 *  - keydown
 *  - keyup
 */
