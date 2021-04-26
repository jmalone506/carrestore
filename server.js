const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const api = require('./routes');
const app = express();

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

// Express body parser
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: 'cardbi',
        resave: true,
        saveUninitialized: true
    })
);

// routes
app.use(api);


const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`Server running on port ${port}`));