const form=document.getElementById('form_id');

form.addEventListener('submit',savetoLocalstorage);

async function savetoLocalstorage(e){
    e.preventDefault();
    const name=e.target.username.value;
     const email=e.target.emailid.value;
     const pn=e.target.phonenumber.value;

     const obj={
        name,
        email,
        pn
     }

    let k=await axios.post('https://crudcrud.com/api/3e9b0850cde7474eb762ea668e9cce09/adata',obj)
     let data=k.data;
     showUseronscreen(data);

    }
    
     

    //  .then((responce)=>{
    //     showUseronscreen(responce.data)
    //     console.log(responce)

    //  })
    //  .catch((err)=>console.log(err))

    // }

    window.addEventListener("DOMContentLoaded",async () => {

     let res=await axios.get('https://crudcrud.com/api/3e9b0850cde7474eb762ea668e9cce09/adata');
     let data=res.data;
     for(let i=0;i<res.data.length;i++){
        showUseronscreen(responce.data[i])

    }

         
     

        


        // axios.get('https://crudcrud.com/api/3e9b0850cde7474eb762ea668e9cce09/adata')
        // .then((responce)=>{
        //     console.log(responce)
        //     for(let i=0;i<responce.data.length;i++){
        //         showUseronscreen(responce.data[i])
    
        //     }
        // })
    
        // .catch((err)=>console.log(err))

    })


    function showUseronscreen(user){

        document.getElementById('username').value='';
        document.getElementById('email').value='';
        document.getElementById('pn').value='';

        if(user._id!==null){
            remouserfromscreen(user._id);
        }
    
        // if(localStorage.getItem(user.email) !== null){
        //     remouserfromscreen(user.email)
    
        // }
    
        const pnode=document.getElementById('ul_id');
        const childHtml=`<li id=${user._id} > ${user.name} ${user.email} ${user.pn} <button onclick=deletUser('${user._id}')>delete</button><br>
                        <button onclick= editUser('${user._id},${user.name}','${user.email}','${user.pn}')>edit</button></li>`
    
        pnode.innerHTML=pnode.innerHTML+childHtml
    }

    function deletUser(user){

        axios.delete(`https://crudcrud.com/api/3e9b0850cde7474eb762ea668e9cce09/adata/${user}`)
        .then((responce)=>{
            console.log('item is deleted')
            console.log(responce);
            remouserfromscreen(responce)
        })
        // .catch((err)=>console.log(err))

    }


    function editUser(name,email,phonenumber,userId){
         axios.put(`https://crudcrud.com/api/3e9b0850cde7474eb762ea668e9cce09/adata${userId}`)
         .then((response)=>{
         document.getElementById('username').value=name;
         document.getElementById('email').value=email;
         document.getElementById('pn').value=phonenumber;
        deletUser(response)
     
     
     })
     
     }


    function remouserfromscreen(userId){
        const pnode=document.getElementById('ul_id');
        const cnode=document.getElementById(userId);
    if(cnode){
        pnode.removeChild(cnode);

      }
    }
