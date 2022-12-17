const forgot=document.getElementById('forgot');

forgot.addEventListener('submit',response);

function response(e){
    e.preventDefault();
    const email=e.target.verifyEmail.value;
    console.log(email);
    axios.post('http://localhost:5555/VerifyEmail',{email:email}).then(response=>{
        if(response.data==='notFound'){
            const c=document.getElementById('check');
            c.innerHTML=`<h1>No email found </h1><br><h3>please check the email</h3><button><a href="signUpUser.html">New user </a></button> `
            

        }
        else{
            console.log(response);
            
            // const c=document.getElementById('check');
            // c.innerHTML=`<h1>found</h1>`
            window.location.href=`resetPassword.html?c=${response.data.id}`
            

        }
        console.log(response)
    })


}