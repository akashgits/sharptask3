const Expense=require('../models/Expenses');
const Secrete_Key=require('./admin');
const Jwt=require('jsonwebtoken')


exports.PostExpenses=(req,res,next)=>{
    const expenseAmount=req.body.expenseAmount;
    const description=req.body.description;
    const category=req.body.category;
    const UserId=req.body.UserId;

    console.log("-->"+expenseAmount+'ok'+description+''+UserId);
    const DecyptJWT=Jwt.verify(UserId,Secrete_Key.Secrete_Key);
    console.log("for Post expense->"+DecyptJWT);
    
    Expense.create({
        userId:DecyptJWT,
        expenseAmount:expenseAmount,
        description:description,
        category:category
        
    }).then(response=>{
        res.send(response);
    })
    }

    

    exports.GetExpense=(req,res,next)=>{
        const UserId=req.body.UserId;
        console.log("this is the expense userId"+UserId)
        const DecyptJWT=Jwt.verify(UserId,Secrete_Key.Secrete_Key);
        console.log("<---->"+DecyptJWT);



        Expense.findAll({where:{UserId:DecyptJWT}}).
        then(response=>{
            console.log("THE oRIGINAL RESPONSE OF EXPENSE"+response)
            res.json(response);
        })
        
    }

    exports.DeleteExpense=(req,res,next)=>{
        const id=req.body.id;
        Expense.destroy({where:{id:id}}).then(response=>{
            res.json(response)

        })
    }