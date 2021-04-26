
const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;


var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    const user = new User({
        name: req.body.fullname,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    });



};