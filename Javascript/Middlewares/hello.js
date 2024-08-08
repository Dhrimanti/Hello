const express=require('express');

const app=express();

let server=0;

function meow(req,res,next){

    
    server++;
    next()

}


app.get('/',meow, (req, res,next)=>{
    
    res.send(`The number of requests are ${server}`)
    

})


app.listen(3000, (req, res)=>{
    console.log("Server is running on port 3000");
 
});


