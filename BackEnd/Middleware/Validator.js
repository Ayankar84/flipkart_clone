const UserModel = require("../Models/userModel")


const Validator = async (req, res, next)=>{
    try{
        const chkusername = await UserModel.findOne({username: req.body.username});
        const chkemail = await UserModel.findOne({email: req.body.email});
        if(chkemail){
            return res.status(400).json({error: "Email already exsist"});
        }
        if(chkusername){
            return res.status(400).json({error: "Username already exsist"});
        }
        next();
    }catch(e){
        return res.status(500).send({error: e.message})
    }
}

module.exports = Validator