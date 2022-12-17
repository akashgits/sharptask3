const form=document.getElementById('form');

form.addEventListener('submit',postDetailsToDataBase);

function postDetailsToDataBase(e){
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(name+""+ email);
    console.log(password)


    axios.post('http://localhost:5555/User-signup',{name:name,email:email,password:password}).
    then(response=>{
        console.log(response);
        let res=response.data;
        if(res==='Already Exists'){
         al(name,email);
        }
        else{
         na();

        }
       
    })
}

function na(){
   // console.log(response)
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('password').value='';

}
function al(name,email){
   alert('User with same Email alredy exists please use different');
   document.getElementById('name').value=name;
   document.getElementById('email').value=email;
   
}

