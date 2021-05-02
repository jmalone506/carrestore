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

const carSeed = [

    {
        "make": "ASTON MARTIN",
        "model": "V8 Vantage"
    },
    {
        "make": "ASTON MARTIN",
        "model": "DBS"
    },
    {
        "make": "ASTON MARTIN",
        "model": "DB9"
    },
    {
        "make": "ASTON MARTIN",
        "model": "Rapide"
    },
    {
        "make": "ASTON MARTIN",
        "model": "V12 Vantage"
    },
    {
        "make": "ASTON MARTIN",
        "model": "Virage"
    },
    {
        "make": "ASTON MARTIN",
        "model": "Vanquish"
    },
    {
        "make": "ASTON MARTIN",
        "model": "DB11"
    },
    {
        "make": "ASTON MARTIN",
        "model": "Lagonda"
    },
    {
        "make": "ASTON MARTIN",
        "model": "Vantage"
    },
    {
        "make": "ASTON MARTIN",
        "model": "V8"
    },
    {
        "make": "ASTON MARTIN",
        "model": "Vanquish S"
    },
    {
        "make": "ASTON MARTIN",
        "model": "Vanquish Zagato"
    },
    {
        "make": "ASTON MARTIN",
        "model": "DBX"
    },
    {
        "make": "TOYOTA",
        "model": "SCION xA"
    },
    {
        "make": "TOYOTA",
        "model": "SCION tC"
    },
    {
        "make": "TOYOTA",
        "model": "Corolla"
    },
    {
        "make": "TOYOTA",
        "model": "PRIUS"
    },
    {
        "make": "TOYOTA",
        "model": "SCION xB"
    },
    {
        "make": "TOYOTA",
        "model": "LAND CRUISER"
    },
    {
        "make": "TOYOTA",
        "model": "Highlander"
    },
    {
        "make": "TOYOTA",
        "model": "4-Runner"
    },
    {
        "make": "TOYOTA",
        "model": "RAV4"
    },
    {
        "make": "TOYOTA",
        "model": "Tacoma"
    },
    {
        "make": "TOYOTA",
        "model": "Scion FR-S"
    },
    {
        "make": "TOYOTA",
        "model": "FJ Cruiser"
    },
    {
        "make": "TOYOTA",
        "model": "Yaris"
    },
    {
        "make": "TOYOTA",
        "model": "Avalon"
    },
    {
        "make": "TOYOTA",
        "model": "Corolla Matrix"
    },
    {
        "make": "TOYOTA",
        "model": "Tundra"
    },
    {
        "make": "TOYOTA",
        "model": "Sienna"
    },
    {

        "make": "TOYOTA",
        "model": "Camry"
    },
    {
        "make": "TOYOTA",
        "model": "Camry Solara"
    },
    {
        "make": "TOYOTA",
        "model": "Sequoia"
    },
    {
        "make": "TOYOTA",
        "model": "SCION xD"
    },
    {
        "make": "TOYOTA",
        "model": "Venza"
    },
    {
        "make": "TOYOTA",
        "model": "FCHV-adv"
    },
    {
        "make": "TOYOTA",
        "model": "Tercel"
    },
    {
        "make": "TOYOTA",
        "model": "Celica"
    },
    {
        "make": "TOYOTA",
        "model": "Supra"
    },
    {
        "make": "TOYOTA",
        "model": "MR2"
    },
    {
        "make": "TOYOTA",
        "model": "Paseo"
    },
    {
        "make": "TOYOTA",
        "model": "Echo"
    },
    {
        "make": "TOYOTA",
        "model": "Cressida"
    },
    {
        "make": "TOYOTA",
        "model": "Cargo Van"
    },
    {
        "make": "TOYOTA",
        "model": "Previa"
    },
    {
        "make": "TOYOTA",
        "model": "T100"
    },
    {
        "make": "TOYOTA",
        "model": "Mirai"
    },
    {
        "make": "TOYOTA",
        "model": "Scion iQ"
    },
    {
        "make": "TOYOTA",
        "model": "Scion iM"
    },
    {
        "make": "TOYOTA",
        "model": "86"
    },
    {
        "make": "TOYOTA",
        "model": "Scion iA"
    },
    {
        "make": "TOYOTA",
        "model": "Prius V"
    },
    {
        "make": "TOYOTA",
        "model": "Prius C"
    },
    {
        "make": "TOYOTA",
        "model": "Prius Plug-in"
    },
    {
        "make": "TOYOTA",
        "model": "Pick-Up"
    },
    {
        "make": "TOYOTA",
        "model": "Van"
    },
    {
        "make": "TOYOTA",
        "model": "Starlet"
    },
    {
        "make": "TOYOTA",
        "model": "Corona"
    },
    {
        "make": "TOYOTA",
        "model": "COROLLA iM"
    },
    {
        "make": "TOYOTA",
        "model": "C-HR"
    },
    {
        "make": "TOYOTA",
        "model": "Prius Prime"
    },
    {
        "make": "TOYOTA",
        "model": "Yaris iA"
    },
    {
        "make": "TOYOTA",
        "model": "RAV4 Prime"
    },
    {
        "make": "FORD",
        "model": "CFT8000"
    },
    {
        "make": "FORD",
        "model": "Mustang"
    },
    {
        "make": "FORD",
        "model": "F-150"
    },
    {
        "make": "FORD",
        "model": "F-250"
    },
    {
        "make": "FORD",
        "model": "B600"
    },
    {
        "make": "FORD",
        "model": "B700"
    },
    {
        "make": "FORD",
        "model": "F-600"
    },
    {
        "make": "FORD",
        "model": "F-590"
    },
    {
        "make": "FORD",
        "model": "Bronco II"
    },
    {
        "make": "FORD",
        "model": "Laser"
    },
    {
        "make": "FORD",
        "model": "LTD"
    },
    {
        "make": "FORD",
        "model": "Fairmont"
    },
    {
        "make": "FORD",
        "model": "Granada"
    },
    {
        "make": "FORD",
        "model": "Courier"
    },
    {
        "make": "FORD",
        "model": "B6000"
    },
    {
        "make": "FORD",
        "model": "C700"
    },
    {
        "make": "FORD",
        "model": "F-100"
    },
    {
        "make": "FORD",
        "model": "Ecosport"
    },
    {
        "make": "FORD",
        "model": "Expedition EL"
    },
    {
        "make": "FORD",
        "model": "Bronco Sport"
    },
    {
        "make": "FORD",
        "model": "Mach-E"
    },
    {
        "make": "AUDI",
        "model": "A3"
    },
    {
        "make": "AUDI",
        "model": "A4"
    },
    {
        "make": "AUDI",
        "model": "A5"
    },
    {
        "make": "AUDI",
        "model": "Q3"
    },
    {
        "make": "AUDI",
        "model": "Q4"
    },
    {
        "make": "AUDI",
        "model": "Q5"
    },
    {
        "make": "CHEVROLET",
        "model": "Aveo"
    },
    {
        "make": "CHEVROLET",
        "model": "Camaro"
    },
    {
        "make": "CHEVROLET",
        "model": "Corvette"
    },
    {
        "make": "CHEVROLET",
        "model": "Cruze"
    },
    {
        "make": "CHEVROLET",
        "model": "Impala"
    },
    {
        "make": "CHEVROLET",
        "model": "Malibu"
    },
    {
        "make": "CHEVROLET",
        "model": "Sonic"
    },
    {
        "make": "CHEVROLET",
        "model": "Spark"
    },
    {
        "make": "CHEVROLET",
        "model": "SS"
    },
    {
        "make": "CHEVROLET",
        "model": "Volt"
    },
    {
        "make": "CHEVROLET",
        "model": "Captiva Sport"
    },
    {
        "make": "CHEVROLET",
        "model": "Equinox"
    },
    {
        "make": "CHEVROLET",
        "model": "Express"
    },
    {
        "make": "CHEVROLET",
        "model": "Orlando"
    },
    {
        "make": "CHEVROLET",
        "model": "Silverado"
    },
    {
        "make": "CHEVROLET",
        "model": "Suburban"
    },
    {
        "make": "CHEVROLET",
        "model": "Tahoe"
    },
    {
        "make": "CHEVROLET",
        "model": "Traverse"
    },
    {
        "make": "CHEVROLET",
        "model": "Tracker"
    },
    {
        "make": "CHEVROLET",
        "model": "Geo Prizm"
    },
    {
        "make": "CHEVROLET",
        "model": "Avalanche"
    },
    {
        "make": "CHEVROLET",
        "model": "Matiz"
    },
    {
        "make": "CHEVROLET",
        "model": "Colorado"
    },
    {
        "make": "CHEVROLET",
        "model": "Cobalt"
    },
    {
        "make": "CHEVROLET",
        "model": "Optra"
    },
    {
        "make": "CHEVROLET",
        "model": "Kalos"
    },
    {
        "make": "CHEVROLET",
        "model": "Trailblazer"
    },
    {
        "make": "CHEVROLET",
        "model": "HHR"
    },
    {
        "make": "CHEVROLET",
        "model": "Uplander"
    },
    {
        "make": "CHEVROLET",
        "model": "Monte Carlo"
    },
    {
        "make": "CHEVROLET",
        "model": "SSR"
    },
    {
        "make": "CHEVROLET",
        "model": "Epica"
    },
    {
        "make": "CHEVROLET",
        "model": "Cavalier"
    },
    {
        "make": "CHEVROLET",
        "model": "3 ton"
    },
    {
        "make": "CHEVROLET",
        "model": "Astro Van"
    },
    {
        "make": "CHEVROLET",
        "model": "Venture"
    },
    {
        "make": "CHEVROLET",
        "model": "B7"
    },
    {
        "make": "CHEVROLET",
        "model": "Lumina"
    },
    {
        "make": "CHEVROLET",
        "model": "Alero"
    },
    {
        "make": "CHEVROLET",
        "model": "Caprice"
    },
    {
        "make": "CHEVROLET",
        "model": "Corsica"
    },
    {
        "make": "CHEVROLET",
        "model": "Beretta"
    },
    {
        "make": "CHEVROLET",
        "model": "Metro"
    },
    {
        "make": "CHEVROLET",
        "model": "GMT-400"
    },
    {
        "make": "CHEVROLET",
        "model": "Trax"
    },
    {
        "make": "CHEVROLET",
        "model": "S-10 Pickup"
    },
    {
        "make": "CHEVROLET",
        "model": "Blazer"
    },
    {
        "make": "CHEVROLET",
        "model": "Impala Limited"
    },
    {
        "make": "CHEVROLET",
        "model": "Bolt EV"
    },
    {
        "make": "CHEVROLET",
        "model": "3500HD"
    },
    {
        "make": "CHEVROLET",
        "model": "5500HD"
    },
    {
        "make": "CHEVROLET",
        "model": "3500 / 4500"
    },
    {
        "make": "CHEVROLET",
        "model": "4500HD"
    },
    {
        "make": "CHEVROLET",
        "model": "4500XD"
    },
    {
        "make": "CHEVROLET",
        "model": "5500XD"
    },
    {
        "make": "CHEVROLET",
        "model": "T-Series"
    },
    {
        "make": "CHEVROLET",
        "model": "C4"
    },
    {
        "make": "CHEVROLET",
        "model": "C5"
    },
    {
        "make": "CHEVROLET",
        "model": "C6"
    },
    {
        "make": "CHEVROLET",
        "model": "C7"
    },
    {
        "make": "CHEVROLET",
        "model": "C8"
    },
    {
        "make": "CHEVROLET",
        "model": "W7"
    },
    {
        "make": "CHEVROLET",
        "model": "D7"
    },
    {
        "make": "CHEVROLET",
        "model": "S-10"
    },
    {
        "make": "CHEVROLET",
        "model": "Geo Spectrum"
    },
    {
        "make": "CHEVROLET",
        "model": "G-Series"
    },
    {
        "make": "CHEVROLET",
        "model": "Motorhome Chassis"
    },
    {
        "make": "CHEVROLET",
        "model": "Chevette"
    },
    {
        "make": "CHEVROLET",
        "model": "Hi-Cube"
    },
    {
        "make": "CHEVROLET",
        "model": "S7"
    },
    {
        "make": "CHEVROLET",
        "model": "Geo Sprint"
    },
    {
        "make": "CHEVROLET",
        "model": "Nova"
    },
    {
        "make": "CHEVROLET",
        "model": "S6"
    },
    {
        "make": "CHEVROLET",
        "model": "El Camino"
    },
    {
        "make": "CHEVROLET",
        "model": "Malibu Classic"
    },
    {
        "make": "CHEVROLET",
        "model": "3500"
    },
    {
        "make": "CHEVROLET",
        "model": "4500"
    },
    {
        "make": "CHEVROLET",
        "model": "FTR / 6500XD"
    },
    {
        "make": "CHEVROLET",
        "model": "6500XD"
    },
    {
        "make": "CHEVROLET",
        "model": "Silverado HD"
    },
    {
        "make": "CHEVROLET",
        "model": "Silverado LD"
    },
    {
        "make": "CHEVROLET",
        "model": "7500XD"
    },
    {
        "make": "CHEVROLET",
        "model": "Onix"
    },
    {
        "make": "DODGE",
        "model": "Avenger"
    },
    {
        "make": "DODGE",
        "model": "Charger"
    },
    {
        "make": "DODGE",
        "model": "Challenger"
    },
    {
        "make": "DODGE",
        "model": "Dart"
    },
    {
        "make": "DODGE",
        "model": "Durango"
    },
    {
        "make": "DODGE",
        "model": "Nitro"
    },
    {
        "make": "DODGE",
        "model": "Ram"
    },
    {
        "make": "HONDA",
        "model": "Accord"
    },
    {
        "make": "HONDA",
        "model": "Civic"
    },
    {
        "make": "HONDA",
        "model": "Crv"
    },
    {
        "make": "HONDA",
        "model": "Element"
    },
    {
        "make": "HONDA",
        "model": "Pilot"
    },
    {
        "make": "NISSAN",
        "model": "Maxima"
    },
    {
        "make": "NISSAN",
        "model": "Frontier"
    },
    {
        "make": "NISSAN",
        "model": "Titan"
    },
    {
        "make": "NISSAN",
        "model": "Pathfinder"
    },
    {
        "make": "NISSAN",
        "model": "350z"
    },
    {
        "make": "NISSAN",
        "model": "GTR"
    },
    {
        "make": "MAZDA",
        "model": "Tribute"
    },
    {
        "make": "MAZDA",
        "model": "MX-5"
    },
    {
        "make": "MAZDA",
        "model": "RX-8"
    },
    {
        "make": "MAZDA",
        "model": "Mazda3"
    },
    {
        "make": "MAZDA",
        "model": "Mazda5"
    },
    {
        "make": "MAZDA",
        "model": "CX-7"
    },
    {
        "make": "MAZDA",
        "model": "CX-9"
    },
    {
        "make": "MAZDA",
        "model": "Mazda6"
    },
    {
        "make": "MAZDA",
        "model": "Mazda2"
    },
    {
        "make": "MAZDA",
        "model": "MPV"
    },
    {
        "make": "MAZDA",
        "model": "CX-5"
    },
    {
        "make": "MAZDA",
        "model": "B-Series"
    },
    {
        "make": "MAZDA",
        "model": "Protege"
    },
    {
        "make": "MAZDA",
        "model": "Millenia"
    },
    {
        "make": "MAZDA",
        "model": "626"
    },
    {
        "make": "MAZDA",
        "model": "323"
    },
    {
        "make": "MAZDA",
        "model": "MX-3"
    },
    {
        "make": "MAZDA",
        "model": "929"
    },
    {
        "make": "MAZDA",
        "model": "RX-7"
    },
    {
        "make": "MAZDA",
        "model": "MX-6"
    },
    {
        "make": "MAZDA",
        "model": "CX-3"
    },
    {
        "make": "MAZDA",
        "model": "GLC"
    },
    {
        "make": "MAZDA",
        "model": "Navajo"
    },
    {
        "make": "MAZDA",
        "model": "CX-30"
    },
    {
        "make": "JEEP",
        "model": "Wrangler"
    },
    {
        "make": "JEEP",
        "model": "Liberty"
    },
    {
        "make": "JEEP",
        "model": "Cherokee"
    },
    {

        "make": "JEEP",
        "model": "Compass"
    },
    {

        "make": "JEEP",
        "model": "Patriot"
    },
    {

        "make": "JEEP",
        "model": "Commander"
    },
    {

        "make": "JEEP",
        "model": "Grand Cherokee"
    },
    {

        "make": "JEEP",
        "model": "Renegade"
    },
    {

        "make": "JEEP",
        "model": "Grand Wagoneer"
    },
    {

        "make": "JEEP",
        "model": "Comanche"
    },
    {
        "make": "JEEP",
        "model": "Wagoneer"
    },
    {
        "make": "JEEP",
        "model": "J-10"
    },
    {
        "make": "JEEP",
        "model": "J-20"
    },
    {
        "make": "JEEP",
        "model": "CJ-7"
    },
    {
        "make": "JEEP",
        "model": "CJ-8 Scrambler"
    },
    {
        "make": "JEEP",
        "model": "CJ-5"
    },
    {
        "make": "JEEP",
        "model": "CJ-6"
    },
    {
        "make": "JEEP",
        "model": "Wrangler JK"
    },
    {
        "make": "JEEP",
        "model": "Gladiator"
    }
]

db.Car.remove({})
    .then(() => db.Car.collection.insertMany(carSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });