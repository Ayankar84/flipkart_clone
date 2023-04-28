const express = require("express");
const { userLogin } = require("../Controllers/controller");

const LoginRoute = express.Router();

LoginRoute.post("/", userLogin)

module.exports = LoginRoute;