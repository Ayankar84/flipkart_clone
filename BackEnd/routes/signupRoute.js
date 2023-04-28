const express = require("express");
const Validator = require("../Middleware/Validator");
const { userSignup } = require("../Controllers/controller");

const SignupRoute = express.Router();

SignupRoute.post("/", Validator, userSignup)

module.exports = SignupRoute;