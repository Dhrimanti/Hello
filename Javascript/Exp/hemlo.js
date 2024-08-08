const express= require('express')
 const cal=(n)=>{
    let ans=0;
    for(let i=0;i<n;i++){
        ans=ans+i;
    }
    return ans;

}
let num=0;
const app=express();
app.get("/", function(req, res,next){
    num++;
    const n=req.query.n;
    const ans=cal(n);
    res.send(ans.toString());
    console.log(`Request number: ${num}`);
    next();
},(req,res)=>{
    console.log("Bhai kaisa hai badmos chora?")
})
app.listen(3000)