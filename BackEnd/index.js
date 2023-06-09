const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dataBaseConnection = require("./Database/db");
const SignupRoute = require("./routes/signupRoute");
const LoginRoute = require("./routes/loginRoute");
// const addDefultData = require("./defaultData");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/signup", SignupRoute);
app.use("/login", LoginRoute);

app.get("/", (req, res) => {
    res.send("hello");
})

const PORT = process.env.PORT;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

dataBaseConnection(username, password).then(() => {
    app.listen(PORT, () => {
        console.log("server listening at http://localhost:8080");
    })
})

// addDefultData();