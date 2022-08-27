const  route =require('express').Router()
const axios = require("axios")

route.get('/sheldon_login_error',(req,res)=>{
    res.render('sheldon_error')
})
route.get('/sheldon_login',(req,res)=>{
    res.render('sheldon')
})
route.get('/sheldon_logins/:username/:password',(req,res)=>{
    
    
	axios({
			url: `http://localhost:3232/login/0fe1fb13-e9e2-4d2d-b9c2-6b636900616d/${req.params.username}/${req.params.password}`,
			method: "get",
		})
    .then(response=>{
        console.log('in response');
            console.log(response.data);
            // req.User=response.data
            res.render('localsto',{user:response.data})
        // res.redirect('/dashboard')
        })
        .catch(err=>{
            console.log('in err');
            
             res.redirect("/sheldon_login_error")
            
        })
        
	
})

route.get("/dashboard",(req,res)=>{
   res.render('index')

})



route.get('/login',(req,res)=>{
    res.render('login')
})
module.exports=route