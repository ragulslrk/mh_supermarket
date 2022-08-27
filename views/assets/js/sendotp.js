const send_otp=(product_price,product_name)=>{
    console.log(product_price,product_name);
    localStorage.setItem('product_name',product_name)
    localStorage.setItem('product_price',product_price)
    const  token=localStorage.getItem('acess_token')
    if(token)
    {
        console.log('in res');
        
    fetch(`http://localhost:3232/sendotp/${token}`)
    .then((res)=>{
        
        return res.json()
    })
    .then(data=>{
        console.log(data)
        window.location.replace('/otp')
    })
    .catch(err=>{
        console.log(err)
    })
    .catch(err=>{
        console.log(err)
    })
    }


}