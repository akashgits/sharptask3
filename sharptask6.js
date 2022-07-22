const headder=document.querySelector('#main-header');
headder.style.borderBottom='solid 10px #ccc';

const input=document.querySelector('input')
input.value='hello world'

const submit=document.querySelector('input[type="submit"]');
submit.value='send';

const item=document.querySelector('.list-group-item');
item.style.color='red'

const lastitem=document.querySelector('.list-group-item:last-child');

lastitem.style.color='blue';
const seconditem=document.querySelector('.list-group-items:nth-child(2)')
seconditem.style.backgroundColor='green'


const thirditem=document.querySelector('.list-group-item:nth-child(3)');
thirdditem.style.display='none';


// query selectorall

const titles=document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='hello';

const odd=document.querySelectorAll('li:nth-child(odd)');
const even=document.querySelectorAll('li:nth-child(even)');
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='red'
    even[i].style.backgroundColor='gray'
}