const  route=require("express").Router()
route.get('/cake',(req,res)=>{
    res.render('cake')
})

route.get('/chocolates',(req,res)=>{
    res.render('chocolates')
})


route.get('/choco_cake',(req,res)=>{
    res.render('choco_cake')
})
route.get('/choco_cookies',(req,res)=>{
    res.render('choco_cookies')
})

route.get('/choco_bar',(req,res)=>{
    res.render('choco_bar')
})
module.exports=route