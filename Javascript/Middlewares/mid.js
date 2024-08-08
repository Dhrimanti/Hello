const express=require('express')
const app = express()
const zod=require('zod')



const schema=zod.array(zod.number())

app.use(express.json())
app.post("/health-checkup", (req,res)=>{
    const kidneys=req.body.kidneys;
    const response=schema.safeParse(kidneys)
    res.send({
        response
    })

})

app.use((err, req, res,next)=>{
    res.json({
        msg:"Bhai korishna erom please "
    })
})

app.listen(3000,(err, req, res)=>{
    console.log("Server running on port 3000")})