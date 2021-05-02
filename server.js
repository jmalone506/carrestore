const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");

const passport = require("passport");
const PORT = process.env.PORT || 3002;
const api = require("./routes");
const app = express();


// Define Middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // DB Config
const db = require("./config/keys.config").mongoURI;

// Connect to MongoDB
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));


app.use(session({
    secret: "cardbisecret",
    resave: true,
    saveUninitialized: true
}));

// Call Passport
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport.config")(passport);

// Set Heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Routes
app.use(api);

// Port on Local Host
app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);