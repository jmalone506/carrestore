
const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const e = require("express");


exports.signUp = (req, res) => {
    const user = new User({
        name: req.body.fullname,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    });

    user.save()
        .then(user => {
            message: "User Added Success"
        })
        .catch(error => {
            res.json({
                message: "An error occured!"
            })
        })

    exports.login = (req, res, next) => {
        var email = req.body.email
        var password = req.body.password

        user.findOne({ $or: [{ email: email }] })
            .then(user => {
                if (user) {
                    bcrypt.compare(password, user.password, function (err, result) {
                        if (err) {
                            res.json({
                                error: err
                            })
                        }
                        if (result) {
                            let token = jwt.sign({ name: user.name }, "verySecretValue", { expiresIn: "1h" })
                            res.json({
                                message: "Login Successful!",
                                token
                            })
                        } else {
                            res.json({
                                message: "Password doesnt match!"
                            })

                        }
                    })
                } else {
                    res.json({
                        message: "No user found"
                    })
                }
            })
    }
    module.exports = {
        signUp, login
    }
};

