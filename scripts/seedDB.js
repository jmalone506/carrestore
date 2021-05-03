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

const bookSeed = [
    {
        title: "Change Your Oil",
        author: "Roseanne",
        body:
            "When's the last time you checked your oil? It's time to check your oil, and turn that engine light off!",
        date: new Date(Date.now())
    },
    {
        title: "Why do Catalytic Convertors get stolen?",
        author: "Josh",
        body:
            "The main reason that catalytic converters are stolen is because they're valuable to scrap metal dealers. They contain precious metals, including rhodium, platinum, and palladium. ... All cars made after 1974 are required to have catalytic converters. Some are more appealing to thieves than others.",
        date: new Date(Date.now())
    },
    {
        title: "Car stolen? Or was it towed by highway patrol?",
        author: "Jammie",
        body:
            "Have you walked outside to find your car missed and thought someone stole it? There is a possibility that it was towed by highway patrol...",
        date: new Date(Date.now())
    },
    {
        title: "What to do if your car was stolen",
        author: "Alicia",
        body:
            "1. Call the police immediately. 2. Contact your car insurance company. 3. Be prepared for the possibility the car may not be returned. 4. Make sure to inspect your car if it's returned 5. Keeping your vehicle protected in the future.",
        date: new Date(Date.now())
    }
];

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
