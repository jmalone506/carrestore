const express = require('express');
const mongoose = require('mongoose');
const session = require("express-session");
const passport = require("passport");


const PORT = process.env.PORT || 3002;
const api = require('./routes');
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// // DB Config
const db = require('./config/keys.config').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use(session({
    secret: "cardbisecret",
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
require("./config/passport.config")(passport);
// routes
app.use(api);

app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);