const form=document.getElementById('form_id');

form.addEventListener('submit',savetoLocalstorage);

function savetoLocalstorage(e){
    e.preventDefault();
    const name=e.target.username.value;
     const email=e.target.emailid.value;
     const pn=e.target.phonenumber.value;

     const obj={
        name,
        email,
        pn
     }


    localStorage.setItem(obj.email,JSON.stringify(obj));
    // const g=JSON.parse(localStorage.getItem(obj.email,obj))
    showUseronscreen(obj)
}

window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showUseronscreen(userDetailsObj)
    }
})

function showUseronscreen(user){

    document.getElementById('username').value='';
    document.getElementById('email').value='';
    document.getElementById('pn').value='';

    if(localStorage.getItem(user.email) !== null){
        remouserfromscreen(user.email)

    }

    const pnode=document.getElementById('ul_id');
    const childHtml=`<li id=${user.email} > ${user.name} ${user.email} ${user.pn} <button onclick=deletUser('${user.email}')>delete</button><br>
                    <button onclick= editUser('${user.name}','${user.email}','${user.pn}')>edit</button></li>`

    pnode.innerHTML=pnode.innerHTML+childHtml

}
 function editUser(name,email,phonenumber){
    document.getElementById('username').value=name;
    document.getElementById('email').value=email;
    document.getElementById('pn').value=phonenumber;
    deletUser(email);


 }


function deletUser(user){
    localStorage.removeItem(user)
    remouserfromscreen(user)
}
function remouserfromscreen(user){
    const pnode=document.getElementById('ul_id');
    const cnode=document.getElementById(user);
    if(cnode){
        pnode.removeChild(cnode);
}

    }
    





