const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load User model
const User = require('../../models/user.model');
const { forwardAuthenticated } = require('../../config/auth.config');

// Login Page
router.get('/api/users/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register Page
router.get('/api/users/signup', forwardAuthenticated, (req, res) => res.render('register'));

// Register
router.post('/api/users/signup', (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({ email: 'Email already exists' });
            } else {

                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    })
                })
            }
        })
});

// Login
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/cars',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/');
});

module.exports = router;
