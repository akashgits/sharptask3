//const Expenses = require("../models/Expenses");


const token=localStorage.getItem('token');

// axios.post("http://localhost:5555/check-premium",{token}).then(response=>{
//     console.log(response);
//     if(response.data.premium===true){
//         document.body.style.backgroundColor="green";
//         const c=document.getElementById('new');
//         const g=`<h3>your a premium member`;
//         c.innerHTML=g;

//     }

    
// })


const form=document.getElementById('form');

form.addEventListener('submit',PostToUser);

function PostToUser(e){
    e.preventDefault();
    const expenseAmount=e.target.expenseAmount.value;
    const description=e.target.description.value;
    const category=e.target.category.value;

    console.log(expenseAmount+'is'+description+'on'+category);
    axios.post(`http://localhost:5555/add-expense`,{UserId:token,expenseAmount:expenseAmount,description:description,category:category}).
    then(response=>{
        na(response.data)
        console.log(response)
    })

    
}
function na(response){
    console.log(response)
    document.getElementById('expenseAmount').value='';
    document.getElementById('description').value='';
    document.getElementById('category').value='';
   // window.location.reload();
   showExpense(response);

}

window.addEventListener('DOMContentLoaded',()=>{
    axios.post("http://localhost:5555/get-expense",{UserId:token}).
    then(response=>{
        console.log(response)
        for(let i=0;i<response.data.length;i++){
            showExpense(response.data[i])
        }
        

    })
})

function showExpense(expenseList){

    console.log(expenseList.expenseAmount)
    

    const d=document.getElementById('ul_id');
    const childHtml=`<li id=${expenseList.id} > ${expenseList.expenseAmount} ${expenseList.description} ${expenseList.category} <button onclick='deletUser(${expenseList.id})'>delete</button><br>
    
    </li>`
   // <button onclick= editUser('${user.name}','${user.email}','${user.pn}',${user.id})>edit </button>
   // const c=`<h4>${expenseList.expenseAmount}--${expenseList.description}--${expenseList.category}</h4>`

    d.innerHTML=d.innerHTML+childHtml;
    
}
function deletUser(id){
    axios.post("http://localhost:5555/delete-Expense",{id:id}).
    then(res=>{
        console.log(res)
        removeFromScreen(id);



       // window.location.reload();
    })
}

function removeFromScreen(id){
    document.getElementById(id).remove();
}

document.getElementById('rzp-button1').onclick =  function (e) {
     axios.get('http://localhost:5555/purchase/premiummembership', { headers: {"Authorization" : token} }).then(response=>{
        console.log(response);
        localStorage.setItem('key',response.data.key_id)
        localStorage.setItem('orderid',response.data.order.id)
        localStorage.setItem('amount',response.data.order.amount)


})}

    // var options =
    // {
    //  "key": response.data.key_id, // Enter the Key ID generated from the Dashboard
    //  "name": "Test Company",
    //  "order_id": response.data.order.id, // For one time payment
    //  "prefill": {
    //    "name": "ordinary",
    //    "email": "test.user@example.com",
    //    "contact": "6303458143"
    //  },
    //  "theme": {
    //   "color": "#3399cc"
    //  },
     // This handler function will handle the success payment'

    //  "handler": function (response) {
    //      console.log(response);
    //      axios.post('http://localhost:5555/purchase/updatetransactionstatus',{
    //          order_id: options.order_id,
    //          payment_id: response.razorpay_payment_id,
    //      }, { headers: {"Authorization" : token} }).then(() => {
    //          alert('You are a Premium User Now')
    //      }).catch(() => {
    //          alert('Something went wrong. Try Again!!!')
    //      })
    //  },
//   }
//   const rzp1 = new Razorpay(options);
//   rzp1.open();
//   e.preventDefault();

//   rzp1.on('payment.failed', function (response){
// //   alert(response.error.code);
//    alert(response.error.description);
//   alert(response.error.source);
//   alert(response.error.step);
//   alert(response.error.reason);
//   alert(response.error.metadata.order_id);
//   alert(response.error.metadata.payment_id);
 //});







 //
 let key=localStorage.getItem('key');

 let amount=localStorage.getItem('amount')
let orderid=localStorage.getItem('orderid')
 var options =
    {
     "key": key, // Enter the Key ID generated from the Dashboard
     "name": "Test Company",
     "order_id":orderid, // For one time payment
     "amount":49900,
     
     "currency":"INR",
     "prefill": {
       "name": "ordinary",
       "email": "test.user@example.com",
       "contact": "6303458143"
     },
     "theme": {
      "color": "#3399cc"
     },
     "handler": function (response) {
        alert('paymentSucessfful');
     }

 

      }
      var rzp1=new Razorpay(options);
      rzp1.on('payment.failed', function (response){
        console.log(response);
        alert("This step of Payment Failed");
        alert(response);
  });

  document.getElementById('pay-button').onclick = function(e){
    rzp1.open();
    e.preventDefault();
}
