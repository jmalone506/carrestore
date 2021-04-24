const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const api = require('./routes');
const app = express();
// Body parser 

app.use(bodyParser.json());
// // DB Config
const db = require('./config/auth.config').mongoURI;
// Connect to MongoDB


mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));



app.use(api);

app.get('/', (req, res) => res.send('Hello World!'));

const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`Server running on port ${port}`));


