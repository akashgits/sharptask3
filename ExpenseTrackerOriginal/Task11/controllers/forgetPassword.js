const bcrypt=require('bcrypt')
const User=require('../models/User');
const jwt=require('jsonwebtoken');
const sgmail=require('@sendgrid/mail');
const { where } = require('sequelize');

exports.VerifyEmail=(req,res,next)=>{
    const email=req.body.email;

    console.log("this is the email"+email);
    User.findOne({where:{email:email}}).then(response=>{
        console.log(response);
        if(response===null){
            console.log('not found')
            res.json('notFound')


        }
        else{
            res.json(response);
            sgmail.setApiKey('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');
            const msg={
                to:'akashpatthi2000@gmail.com',
                from:'akashbablu771@gmail.com',
                subject:'change the password',
                text:'you can do it now',
                html: `<a href="http://localhost:4444/password/resetpassword">Reset password</a>`,
            }
            sgmail.send(msg).then(respon=>{
                console.log(respon);
                console.log("this is sendgrid resp");

               

            }).catch(err=>{
                console.log(err);
            })
            

        }
        
    })

}

exports.UpdatePasword=(req,res,next)=>{

    const password=req.body.password;
    const id=req.body.id;
    console.log(password+"lkkkk"+id);


    bcrypt.hash(password,10).then(hash=>{

        User.update({password:hash},{where:{id:id}}).then(response=>{
            console.log(response);
            res.json(response);
        })


    })


}