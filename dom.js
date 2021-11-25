parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

lastChild
console.log(itemList.lastChild);
lastElementChild
console.log(itemList.lastElementChild);

childNodes
console.log(itemList.childNodes);

console.log(itemList.firstChild);

console.log(itemList.firstElementChild);

nextSibling
console.log(itemList.nextSibling);
 nextElementSibling
console.log(itemList.nextElementSibling);

previousSibling
console.log(itemList.previousSibling);
previousElementSibling
console.log(itemList.previousElementSibling);

// createElement
// Create a div
var newDiv =  document.createElement('div');
// Add class
newDiv.className= 'hello';
// Add id
newDiv.id = 'hello1';
// Add attr
newDiv.setAttribute('title', 'Hello Div');
// Create text node
var newDivText = document.createTextNode('Hello World');
// Add text to div
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);