
const {Admin}=require('../db');
function adminMiddleware(req, res, next) {
    const username=req.headers.username;
    const password=req.headers.password;
    console.log(username, password);
    Admin.findOne({username, password}).then(function(value){
        if(value){
            next();
        }else{
            res.status(403).json({msg:"Invalid username or password"})
        }

    })
    
}

module.exports = adminMiddleware;