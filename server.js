const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/api/user.routes');
const signup = require('./routes/api/auth.routes');
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
app.get('/', (req, res) => res.send('Hello World!'));
// Use Routes
app.use('/api/users', users);
app.use('/api/profile', signup);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server running on port ${port}`));


