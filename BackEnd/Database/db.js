const mongoose = require("mongoose");

const dataBaseConnection = async (username, password)=>{
    try{
        await mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.xtfmvqy.mongodb.net/flipkartClone?appName=mongosh+1.7.1`);
        console.log("Database connected");
    }catch(e){
        console.log(e.message);
    }
}

module.exports = dataBaseConnection;