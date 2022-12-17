const express =require('express');
const app=express();

const bodyparser=require('body-parser');

const sequelize=require('./util/database');
const Sequelize=require('sequelize');
const adminRoutes=require('./routes/admin');
const ExpenseRoutes=require('./routes/expense')
const Expense=require('./models/Expenses');
const User=require('./models/User');
const Orders=require('./models/orders')
const PurchaseRoutes=require('./routes/purchsasePremium')
const forgetRoutes=require('./routes/forgetPassword')

const cors=require('cors');
const dotenv=require('dotenv')





app.use(bodyparser.urlencoded({extended:false}));
dotenv.config();
app.use(cors());
app.use(express.json());


app.use(adminRoutes);
app.use(forgetRoutes);
app.use('/purchase',PurchaseRoutes)
app.use(ExpenseRoutes);



app.get('/',(req,res,next)=>{
    res.send('not now')
})
app.use((req,res,next)=>{
    res.send('error page')
});



Expense.belongsTo(User);
User.hasMany(Expense);

Orders.belongsTo(User);
User.hasMany(Orders)







sequelize.
sync().
//sync({force:true}).
then(response=>{
    app.listen(5555);
    

}).catch(err=>{
    console.log('err')
})


