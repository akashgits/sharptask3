
const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const Orders=sequelize.define('forgetPassword',{
    id:{
        type:Sequelize.UUID,
       
        allowNull:false,
        primaryKey:true,
    },
    active:{
        type:Sequelize.BOOLEAN,
        
    }
 

  
   
   
})

module.exports=Orders;