const express=require('express');
const app=express.Router();

const forgetController=require('../controllers/forgetPassword');

app.post('/verifyEmail',forgetController.VerifyEmail);

app.post('/updatePassword',forgetController.UpdatePasword);


module.exports=app;
