const itemlist=document.querySelector('#items')



// console.log(itemlist.parentNode)
// itemlist.parentNode.style.backgroundColor='gray';
// console.log(itemlist.parentNode.parentNode.parentNode);


// parent element

// console.log(itemlist.parentElement)

// itemlist.parentElement.style.backgroundColor='green';
// console.log(itemlist.parentElement.parentElement.parentElement);



// console.log(itemlist.childNodes)


console.log(itemlist.children);

console.log(itemlist.children[2]);

itemlist.children[2].style.backgroundColor='blue'

console.log(itemlist.firstChild)

// first elemnt chid
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent='hello'

itemlist.lastElementChild.innerHTML='hii'


//siblings

console.log(itemlist.nextSibling);


console.log(itemlist.nextElementSibling);

//previous

console.log(itemlist.previousSibling);

console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color='red'

// crate element 

// create a div

const newdiv=document.createElement('div')

//add class
newdiv.className='hello';

//add id
newdiv.id='hello1'

//add attribute

newdiv.setAttribute('title','hello div');

//text node

const newdivtext=document.createTextNode('hello world')

//add text to div
newdiv.appendChild(newdivtext);

const container=document.querySelector('header .container');
const h1=document.querySelector('header h1');




console.log(newdiv)

container.insertBefore(newdiv,h1)
