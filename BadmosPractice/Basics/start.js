const mongoose=require('mongoose');
const express=require('express');
mongoose.connect("mongodb+srv://dhritimancg:Hello@cluster0.mu9navt.mongodb.net/kattu")
const User=mongoose.model('ksi',{name:String,email:String,password:String});
const user=new User({name:"String",email:"String",password:"String"});

const app=express();
app.use(express.json());
app.post("/signup",async function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    const email=req.body.email;
    const existingUser=await User.findOne({email:email,password:password});
    if(existingUser){
        return res.status(409).json({msg:"User already exists"})
    }
    const user=new User({name:username,email:email,password:password});
    user.save();
    res.json({msg:"User created successfully"});
}
)
app.listen(3000);
