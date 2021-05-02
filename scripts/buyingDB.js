const mongoose = require("mongoose");
const db = require("../models");

// // DB Config
const url = require("../config/keys.config").mongoURI;

// Connect to MongoDB
mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const buySeed = [

    {
        thumbnail: "../client/src/images/carguru.jpg",
        title: "Car Guru",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
        href: "",
        date: new Date(Date.now())
    },
    {
        thumbnail: "../client/src/images/carguru.jpg",
        title: "Car Guru",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
        href: "",
        date: new Date(Date.now())
    },
    {
        thumbnail: "../client/src/images/carguru.jpg",
        title: "Car Guru",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
        href: "",
        date: new Date(Date.now())
    },
    {
        thumbnail: "../client/src/images/carguru.jpg",
        title: "Car Guru",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
        href: "",
        date: new Date(Date.now())
    },
    {
        thumbnail: "../client/src/images/carguru.jpg",
        title: "Car Guru",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
        href: "",
        date: new Date(Date.now())
    },
    {
        thumbnail: "../client/src/images/carguru.jpg",
        title: "Car Guru",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
        href: "",
        date: new Date(Date.now())
    }

]

db.Buy.remove({})
    .then(() => db.Buy.collection.insertMany(buySeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });