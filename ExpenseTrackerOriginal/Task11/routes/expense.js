const express=require('express');
const app=express.Router();

const expenseController=require('../controllers/expens')

app.post('/add-expense',expenseController.PostExpenses);
app.post('/get-expense',expenseController.GetExpense);

app.post('/delete-Expense',expenseController.DeleteExpense)


module.exports=app