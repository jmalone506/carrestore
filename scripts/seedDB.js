const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/carsdb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);


const carSeed = [
    {
        model: "The Dead Zone",
        make: "Stephen King",
        year: 2000
    },
    {
        model: "The Dead Zone",
        make: "Stephen King",
        year: 1999
    },
    {
        model: "The Dead Zone",
        make: "Stephen King",
        year: 2010
    }
];

db.Car
    .remove({})
    .then(() => db.Car.collection.insertMany(carSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
