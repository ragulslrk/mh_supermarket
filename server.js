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
    res.redirect('/login')
})

//route to login page
const  login =require('./controller/login')
app.use(login)
//route to products 
const product=require('./controller/products')
app.use(product)

//route to buy
const buy=require('./controller/buy')
app.use(buy)


app.listen('3434',()=>{

console.log("listening mh supermarket")
})