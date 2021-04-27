const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const api = require('./routes');
const app = express();

// // DB Config
const db = require('./config/keys.config').mongoURI;

// body parser
app.use(bodyParser.json());

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



// routes
app.use(api);


const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`Server running on port ${port}`));