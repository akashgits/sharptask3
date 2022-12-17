const express=require('express');
const app=express.Router();

const purchaseController=require('../controllers/purchase');
const Authcontroller=require('../MiddleWare/auth')

// app.get('/premiummembership',Authcontroller.authenication,purchaseController.purchasePremium);
app.post('/updatetransactionstatus',purchaseController.UpdateTransactionStatus)
app.get('/premiummembership',purchaseController.purchasePremium);
module.exports=app;