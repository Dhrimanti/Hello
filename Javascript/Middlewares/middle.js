const express =require('express');
const app = express();
app.get("/health-checkup",(req,res)=>{
    const kidneyId=req.query.kidneyId;
    const username=req.headers.username;
    const password=req.headers.password;
    if(username=="dhrimanti" && password=="bhappa"){
        if(kidneyId==1||kidneyId==2){
            res.json({
                msg:"Kidney theek hai"
            })
            
        }
        else{
            res.json({
                msg:"BHai bura hai"
            })
        }
    }
    
})
app.get("/",(req,res)=>{
    res.send("<b>Bhappabhaii kaisa hai?</b>")
})
app.listen(3000)