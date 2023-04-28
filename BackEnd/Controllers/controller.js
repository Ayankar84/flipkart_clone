const UserModel = require("../Models/userModel");
// const jwt = require("jsonwebtoken");
const { getToken } = require("./Token");

const userSignup = async (req, res) => {
    try {
        await UserModel.create(req.body);
        res.send({ data: "Account created successfull"});
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
}

const userLogin = async (req, res)=>{
    try{
        var data = await UserModel.findOne({username:req.body.username});
        if(data){
            data = data.toJSON();
            delete data.password;
            const token = getToken(data);
            return res.send({token});
        }
        res.status(400).send({error: "Invalid username or password"});
    }catch(e){
        res.status(500).send({ error: e.message });
    }
}

module.exports = {userSignup, userLogin};