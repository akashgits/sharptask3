const form=document.getElementById('form_id');

form.addEventListener('submit',savetoLocalstorage);

function savetoLocalstorage(e){
    e.preventDefault();
    const name=e.target.username.value;
     const email=e.target.emailid.value;
     const pn=e.target.phonenumber.value;

     let obj={
        name,
        email,
        pn
     }

     axios.post('https://crudcrud.com/api/9c615d52c91747a590f7b7b47fddd644/adata',obj)
     .then((responce)=>{
        showUseronscreen(responce.data)
        console.log(responce)

     })
     .catch((err)=>console.log(err))

    }

    window.addEventListener("DOMContentLoaded", () => {

        axios.get('https://crudcrud.com/api/9c615d52c91747a590f7b7b47fddd644/adata')
        .then((responce)=>{
            console.log(responce)
            for(let i=0;i<responce.data.length;i++){
                showUseronscreen(responce.data[i])
    
            }
        })
        .catch((err)=>console.log(err))

    })

    function showUseronscreen(user){

        document.getElementById('username').value='';
        document.getElementById('email').value='';
        document.getElementById('pn').value='';

       
    
        if(localStorage.getItem(user.email) !== null){
            remouserfromscreen(user.email)
    
        }
    
        const pnode=document.getElementById('ul_id');
        const childHtml=`<li id=${user._id} > ${user.name} ${user.email} ${user.pn} <button onclick=deletUser('${user._id}')>delete</button><br>
                        <button onclick= editUser('${user._id}','${user.name}','${user.email}','${user.pn}')>edit</button></li>`
    
        pnode.innerHTML=pnode.innerHTML+childHtml
    }

    function deletUser(user){

        axios.delete(`https://crudcrud.com/api/9c615d52c91747a590f7b7b47fddd644/adata/${user}`)
        .then((responce)=>{
            console.log('item is deleted')
            console.log(responce);
            remouserfromscreen(user)
        })
        // .catch((err)=>console.log(err))

    }


    function editUser(userId, name, email, phonenumber){
        //  axios.put(`https://crudcrud.com/api/3e9b0850cde7474eb762ea668e9cce09/adata${userId}`)
        //  .then((response)=>{
         document.getElementById('username').value=name;
         document.getElementById('email').value=email;
         document.getElementById('pn').value=phonenumber;
        deletUser(userId)
     
     
     
     
     }


    function remouserfromscreen(userId){
        const pnode=document.getElementById('ul_id');
        const cnode=document.getElementById(userId);
        if(cnode){
        pnode.removeChild(cnode);

        }
            
    
    
 }
