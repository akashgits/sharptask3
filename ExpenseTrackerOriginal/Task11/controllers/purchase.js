const Order=require('../models/orders');
const Razorpay= require('razorpay');
const User=require('../models/User');
const jwt=require('jsonwebtoken');


const purchasePremium=(req,res,next)=>{

    const token = req.header('authorization');
    console.log(token);
    console.log("this is the token"+token+"this is the env "+process.env.TOKEN_SECRET)
    const userid = jwt.verify(token, process.env.TOKEN_SECRET);
    User.findByPk(userid).then(user => {
        let instanc= new Razorpay({
            key_id:"rzp_test_SW2YN8pF47tvu2",
            key_secret:"a1Zjwyg2A82TnUX4nJbofvWb"
        })
        const amount=49900;
    
        instanc.orders.create({amount,currency:"INR"},(err, order)=>{
    
            if(err){
                throw new Error(err)
            }
            else{
                Order.create({orderid:order.id,status:"PENDING",userId:user.id }).then(response=>{
                    console.log(response)
                    console.log("this is the order"+order);
                     res.status(201).json({order,key_id:instanc.key_id,userId:userid})
                }).catch(err=>{
                    throw new Error(err)
                })
    
            }
        })

    })
    
    

}
const UpdateTransactionStatus=(req,res,next)=>{
    
    const {payment_id, order_id,userId}=req.body;
    console.log('this is payment'+payment_id+'this is user'+userId);
    Order.findOne({where:{orderid:order_id}}).then(order=>{
        Order.update({paymentid:payment_id, status:'SUCCESFUL'},{where:{id:order.id}}).then(response=>{
            User.update({premium:true},{where:{id:userId}}).then(response=>{
                console.log(response)
                res.status(202).json({sucess: true, message: "Transaction Successful"});

            }).catch(err=>{
                console.log('error');
            })
             
        })
        .catch((err)=> {
            console.log(err);
        })
  

})
}

module.exports={
    purchasePremium,UpdateTransactionStatus
}



    