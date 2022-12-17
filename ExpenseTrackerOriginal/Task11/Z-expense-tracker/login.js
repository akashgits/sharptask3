


const form=document.getElementById('form');

form.addEventListener('submit',postDetailsToDataBase);

function postDetailsToDataBase(e){
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;

    axios.post('http://localhost:5555/login',{email:email,password:password}).
    then(response=>{
        console.log(response);
        
        if(response.data.message==='login'){
            console.log(response.data.UserId);
           // na()
            alert('lgin successful');
            localStorage.setItem('token', response.data.UserId);
           // localStorage.setItem('userDetails', JSON.stringify(response.data.user))

            // let user=encodeURI(response.data.UserId)
            // console.log(user)
            //bcrypt.hash(response.data.UserId,10).then(hash=>{

                window.location.href=`ExpensePage.html`

            
            

        }
        else if(response.data==='not'){
            alert('check the password');
            document.getElementById('email').value=email;
            document.getElementById('password').value=password;
        }
        else if(response.data==='new'){
            alert('No user found Please signUp as newuser')
        }

    })

};


