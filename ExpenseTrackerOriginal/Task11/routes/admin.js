const express=require('express');
const app=express.Router();

const admincontroller=require('../controllers/admin');

app.post('/User-signup',admincontroller.PostSignUp);

app.get('/Signed-Up-User-details',admincontroller.GetSignedUpUserDetails);

app.post('/login',admincontroller.PostLogin);

//app.post('/check-premium',admincontroller.GetPremiumDetails)


module.exports=app;