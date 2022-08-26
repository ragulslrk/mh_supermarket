const express=require('express')
const app=express()
require("dotenv").config()

const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs")
app.use(express.static('views'))
app.use(express.static('assets'))



app.get('/',(req,res)=>{
    res.send('this  is mh supermarket home page')
})

//route to login page
const  login =require('./controller/login')
app.use(login)

app.listen('3434',()=>{

console.log("listening mh supermarket")
})