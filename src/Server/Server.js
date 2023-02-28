const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose=require('mongoose');
const cors = require('cors');
const { Signin, Signup } = require('./controller/users');
mongoose.connect('mongodb://localhost:27017/food-app',
{
    useNewUrlParser:true
});

const db=mongoose.connection;
db.on("error",console.error.bind(console,"connection error : "));
db.once("open",function () {
    console.log("Connected Successfully");
});

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json())
app.use(cors())
app.get('/api/v1/health',(req,res)=>{
    let message = {message : "Its working perfectly",status: "success"};
    res.status(200).json(message);
});
app.get("/",cors(),(req,res)=>{
    
})
app.post('/',Signin);
app.post('/signup',Signup);


app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})