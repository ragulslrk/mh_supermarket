const route =require('express').Router()

route.get('/otp',(req,res)=>{
    res.render('otp')
})
module.exports=route