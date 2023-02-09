const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const dotenv=require('dotenv')
const SignUp_SignInRoutes=require('./Backend/routes/SignUp_SignIn')
const premiumController=require('./Backend/routes/premuim')
const User=require('./Backend/Models/user');
const Expense=require('./Backend/Models/expense');

const sequelize=require('./Backend/util/database')
const premiumFeatureRoutes=require(`./Backend/routes/premiumfeatures`);
const Order=require('./Backend/Models/Order');




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


Expense.belongsTo(User);
User.hasMany(Expense);





Order.belongsTo(User);
User.hasMany(Order);


sequelize
.sync()
.then(response=>{
    // https.createServer({key:privatekey, cert:certificate},app).listen(process.env.port)
    app.listen(process.env.port);

})

