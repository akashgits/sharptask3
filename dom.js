// console.log(document.URL);
// console.log(document.domain);
// console.log(document.title);

// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links)
// console.log(document.images)

// console.log(document.getElementById('header-title'));



const tit=document.getElementById('header-title')



console.log(tit);
console.log(tit.textContent);
console.log(tit.innerText);

tit.innerHTML='<h3>hello</h3>';
const kit=document.getElementById('main-header')
kit.style.borderBottom='solid 3px #000'

const chang=document.getElementById('kit')
chang.style.color='red'
chang.style.font='bold'

var grp=document.getElementsByClassName('list-group-item');
console.log(grp)
console.log(grp[1]);
grp[1].textContent='hello'
grp[1].style.font='bold';
grp[2].style.backgroundColor='green'

for(let i=0;i<grp.length;i++){
    grp[i].style.fontWeight='bold'
}




























