const express= require('express')
const app= express();
app.use(express.json())

var user=[{
    name:"HJello",
    kidney:[{
        healthy:"true"
        
    }]
}];

app.get('/',(req,res)=>{
    const kidneys = user[0].kidney;
    const num=kidneys.length;
    let numofHealthy=0;
    for(let i=0;i<num;i++){
        if(kidneys[i].healthy){
            numofHealthy++;
        }
    }
    const numunheal=num-numofHealthy;
    res.json({numofHealthy: numofHealthy,number:num,numberunheal:numunheal});
})


app.post('/',(req,res)=>{
    const kidney = req.body.isHealthy;
    user[0].kidney.push(kidney);
    res.json(user[0].kidney);});
app.listen(3000)

console.log("hello")