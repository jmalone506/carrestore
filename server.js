const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Car Hacks" });
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});



const db = require("./models");
const Role = db.role;

db.mongoose
    .connect(`mongodb//hullorose:hullorose@cluster0.storg.mongodb.net/carsdb?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        initial();
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });


function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'user' to roles collection");
            });

            new Role({
                name: "moderator"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'moderator' to roles collection");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'admin' to roles collection");
            });
        }
    });
}

// const express = require("express");
// const cors = require("cors");

// const app = express();

// const mongoose = require("mongoose");
// const routes = require("./routes");

// const CONNECTION_URL = "mongodb//hullorose:hullorose@cluster0.storg.mongodb.net/carsdb?retryWrites=true&w=majority"
// const PORT = process.env.PORT || 3001;


// // // Connect to the Mongo DB
// // mongoose.connect(
// //     process.env.MONGODB_URI || "mongodb://localhost/carsdb"
// // );

// mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTop})

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors());


// // Add routes, both API and view
// app.use("/home", routes);

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }

// // Start the API server
// app.listen(PORT, function () {
//     console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
