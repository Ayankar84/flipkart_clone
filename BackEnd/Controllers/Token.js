const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SECRET;

const getToken = (data)=>{
    const token = jwt.sign(data, secret);
    return token;
}


module.exports = {getToken}