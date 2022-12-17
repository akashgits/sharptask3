const bcrypt=require('bcrypt')
const User=require('../models/User');
const jwt=require('jsonwebtoken');
const { DATEONLY } = require('sequelize');




// exports.GetPremiumDetails=(req,res,next)=>{
    
//     const UserId=req.body.UserId;
//     console.log('This is User Id-->'+UserId);
//     const DecyptJWT=jwt.verify(UserId,'expense');
//     User.findByPk(DecyptJWT).then(response=>{
//         res.json(response);
//     })
// }
exports.Secrete_Key='expense'

exports.PostSignUp=(req,res,next)=>{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
   
    console.log(name+"--"+email);
    const d= new Date();
    console.log(d);



    User.findOne({where:{email:email}}).
    then(response=>{
        if(response===null){
            bcrypt.hash(password,10)
            .then(hash=>{
                User.create({name:name,email:email,password:hash,premium:false,validTill:d}).
                then(response=>{
                    res.json(response)
                }).catch(err=>console.log('err'))
                
        
            })
           
        }
        if(response!=null){
            res.json('Already Exists')
        }
    })
   
}

exports.GetSignedUpUserDetails=(req,res,next)=>{
    User.findAll().
    then(response=>{
        console.log(response)
    }).catch(err=>{
        console.log(err);
    })
}

exports.PostLogin=(req,res,next)=>{
    const email=req.body.email;
    const password=req.body.password;
    console.log(email+"" +password)

    User.findOne({where:{email:email}}).
    then(response=>{
        
        //console.log(s);


        if(response===null){
            res.send('new')

        }
        else{
            bcrypt.compare(password,response.password)
            .then(result=>{
                console.log(result);
                if(result===true){
                    
                    // let s=response.id.toString();
                    
                    // bcrypt.hash(s,10)
                    // .then(hash=>{
                    //     console.log(hash)
                    const Id=generateToken(response.id);
                    console.log( "this is the JSW TOLEN-->"+Id);
                        res.json({message:'login',UserId:Id});

                    // })
                        //  res.json({message:'login',UserId:response.id})

                }
                // if(response.password===password){
                
                
                else{
                    res.send('not')
                }

            })

          

        }

      
    })

}

function generateToken(id){
    return jwt.sign(id,process.env.TOKEN_SECRET)
}













