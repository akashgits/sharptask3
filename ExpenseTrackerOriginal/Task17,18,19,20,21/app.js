const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const dotenv=require('dotenv')
const SignUp_SignInRoutes=require('./Backend/routes/SignUp_SignIn')
const premiumController=require('./Backend/routes/premuim')
const User=require('./Backend/Models/user');
const Expense=require('./Backend/Models/expense');
const DownloadList=require('./Backend/Models/DownloadList')
const forgetPassword=require('./Backend/Models/forgetpassword')
const sequelize=require('./Backend/util/database')
const premiumFeatureRoutes=require(`./Backend/routes/premiumfeatures`);
const Order=require('./Backend/Models/Order');
const helmet=require('helmet');
const compression=require('compression')
const morgan=require('morgan');
const fs=require('fs')
const path = require('path');
const https=require('https');



app.use(bodyParser.urlencoded({extended:false}))
app.use(cors());
dotenv.config();
const accesslogs=fs.createWriteStream(path.join(__dirname,'accesslogs'),{flags:'a'});


app.use(helmet());
app.use(compression());
app.use(morgan('combined',{stream:accesslogs}))
const privatekey=fs.readFileSync('server.key');
const certificate=fs.readFileSync('server.cert');
console.log(privatekey+"---"+certificate);
 app.use(express.json())
app.use(SignUp_SignInRoutes);
app.use(premiumController);
app.use(premiumFeatureRoutes);
app.use(helmet({
    contentSecurityPolicy: {
      useDefaults: true, 
      directives: { 
        'script-src': ["'self'","'unsafe-inline'", "https://cdnjs.cloudflare.com/",]  ,
        'script-src-atr':["unsafe-inline"]

      }
    }
  })
  );

app.use((req,res,)=>{
    console.log('utll',req.url); 
    res.sendFile(path.join(__dirname,`Fontend/${req.url}`))
})

Expense.belongsTo(User);
User.hasMany(Expense);

DownloadList.belongsTo(User);
User.hasMany(DownloadList);

forgetPassword.belongsTo(User);
User.hasMany(forgetPassword);

Order.belongsTo(User);
User.hasMany(Order);


sequelize
.sync()
.then(response=>{
    // https.createServer({key:privatekey, cert:certificate},app).listen(process.env.port)
    app.listen(process.env.port);

})

