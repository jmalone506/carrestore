const express = require("express");
const cors = require("cors");

const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

const CONNECTION_URL = "mongodb//hullorose:hullorose@cluster0.storg.mongodb.net/carsdb?retryWrites=true&w=majority"
const PORT = process.env.PORT || 3001;
// // Connect to the Mongo DB
// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://localhost/carsdb"
// );

mongoose.connet(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTop})

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


// Add routes, both API and view
app.use("/home", routes);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);


// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }


// // Start the API server
// app.listen(PORT, function () {
//     console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
