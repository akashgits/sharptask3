var grp=document.getElementsByClassName('list-group-item');
console.log(grp)
console.log(grp[1]);
grp[1].textContent='hello'
grp[1].style.font='bold';
grp[2].style.backgroundColor='green'

for(let i=0;i<grp.length;i++){
    grp[i].style.fontWeight='bold'
}
