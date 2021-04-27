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
        "Make_Name": "ASTON MARTIN",
        "Model_Name": "V8 Vantage"
    },
    {
        "Make_Name": "ASTON MARTIN",
        "Model_Name": "DBS"
    },
    {
        "Make_Name": "ASTON MARTIN",
        "Model_Name": "DB9"
    },
    {
        "Make_Name": "ASTON MARTIN",
        "Model_Name": "Rapide"
    },
    {
        "Make_Name": "ASTON MARTIN",
        "Model_Name": "V12 Vantage"
    },
    {
        "Make_Name": "ASTON MARTIN",
        "Model_Name": "Virage"
    },
    {
        "Make_Name": "ASTON MARTIN",
        "Model_Name": "Vanquish"
    },
    {
        "Make_Name": "ASTON MARTIN",
        "Model_Name": "DB11"
    },
    {
        "Make_Name": "ASTON MARTIN",
        "Model_Name": "Lagonda"
    },
    {
        "Make_Name": "ASTON MARTIN",
        "Model_Name": "Vantage"
    },
    {
        "Make_Name": "ASTON MARTIN",
        "Model_Name": "V8"
    },
    {
        "Make_Name": "ASTON MARTIN",
        "Model_Name": "Vanquish S"
    },
    {
        "Make_Name": "ASTON MARTIN",
        "Model_Name": "Vanquish Zagato"
    },
    {
        "Make_Name": "ASTON MARTIN",
        "Model_Name": "DBX"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "SCION xA"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "SCION tC"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Corolla"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "PRIUS"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "SCION xB"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "LAND CRUISER"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Highlander"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "4-Runner"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "RAV4"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Tacoma"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Scion FR-S"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "FJ Cruiser"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Yaris"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Avalon"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Corolla Matrix"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Tundra"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Sienna"
    },
    {
        "Make_ID": 448,
        "Make_Name": "TOYOTA",
        "Model_ID": 2469,
        "Model_Name": "Camry"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Camry Solara"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Sequoia"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "SCION xD"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Venza"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "FCHV-adv"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Tercel"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Celica"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Supra"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "MR2"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Paseo"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Echo"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Cressida"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Cargo Van"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Previa"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "T100"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Mirai"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Scion iQ"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Scion iM"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "86"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Scion iA"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Prius V"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Prius C"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Prius Plug-in"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Pick-Up"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Van"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Starlet"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Corona"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "COROLLA iM"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "C-HR"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Prius Prime"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "Yaris iA"
    },
    {
        "Make_Name": "TOYOTA",
        "Model_Name": "RAV4 Prime"
    },
    {
        "Make_Name": "FORD",
        "Model_Name": "CFT8000"
    },
    {
        "Make_Name": "FORD",
        "Model_Name": "Mustang"
    },
    {
        "Make_Name": "FORD",
        "Model_Name": "F-150"
    },
    {
        "Make_Name": "FORD",
        "Model_Name": "F-250"
    },
    {
        "Make_Name": "FORD",
        "Model_Name": "B600"
    },
    {
        "Make_Name": "FORD",
        "Model_Name": "B700"
    },
    {
        "Make_Name": "FORD",
        "Model_Name": "F-600"
    },
    {
        "Make_Name": "FORD",
        "Model_Name": "F-590"
    },
    {
        "Make_Name": "FORD",
        "Model_Name": "Bronco II"
    },
    {
        "Make_Name": "FORD",
        "Model_Name": "Laser"
    },
    {
        "Make_Name": "FORD",
        "Model_Name": "LTD"
    },
    {
        "Make_Name": "FORD",
        "Model_Name": "Fairmont"
    },
    {
        "Make_Name": "FORD",
        "Model_Name": "Granada"
    },
    {
        "Make_Name": "FORD",
        "Model_Name": "Courier"
    },
    {
        "Make_Name": "FORD",
        "Model_Name": "B6000"
    },
    {
        "Make_Name": "FORD",
        "Model_Name": "C700"
    },
    {
        "Make_Name": "FORD",
        "Model_Name": "F-100"
    },
    {
        "Make_Name": "FORD",
        "Model_Name": "Ecosport"
    },
    {
        "Make_Name": "FORD",
        "Model_Name": "Expedition EL"
    },
    {
        "Make_Name": "FORD",
        "Model_Name": "Bronco Sport"
    },
    {
        "Make_Name": "FORD",
        "Model_Name": "Mach-E"
    },
    {
        "Make_Name": "AUDI",
        "Model_Name": "A3"
    },
    {
        "Make_Name": "AUDI",
        "Model_Name": "A4"
    },
    {
        "Make_Name": "AUDI",
        "Model_Name": "A5"
    },
    {
        "Make_Name": "AUDI",
        "Model_Name": "Q3"
    },
    {
        "Make_Name": "AUDI",
        "Model_Name": "Q4"
    },
    {
        "Make_Name": "AUDI",
        "Model_Name": "Q5"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Aveo"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Camaro"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Corvette"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Cruze"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Impala"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Malibu"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Sonic"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Spark"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "SS"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Volt"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Captiva Sport"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Equinox"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Express"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Orlando"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Silverado"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Suburban"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Tahoe"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Traverse"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Tracker"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Geo Prizm"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Avalanche"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Matiz"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Colorado"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Cobalt"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Optra"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Kalos"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Trailblazer"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "HHR"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Uplander"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Monte Carlo"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "SSR"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Epica"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Cavalier"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "3 ton"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Astro Van"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Venture"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "B7"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Lumina"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Alero"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Caprice"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Corsica"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Beretta"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Metro"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "GMT-400"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Trax"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "S-10 Pickup"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Blazer"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Impala Limited"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Bolt EV"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "3500HD"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "5500HD"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "3500 / 4500"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "4500HD"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "4500XD"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "5500XD"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "T-Series"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "C4"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "C5"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "C6"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "C7"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "C8"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "W7"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "D7"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "S-10"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Geo Spectrum"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "G-Series"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Motorhome Chassis"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Chevette"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Hi-Cube"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "S7"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Geo Sprint"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Nova"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "S6"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "El Camino"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Malibu Classic"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "3500"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "4500"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "FTR / 6500XD"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "6500XD"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Silverado HD"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Silverado LD"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "7500XD"
    },
    {
        "Make_Name": "CHEVROLET",
        "Model_Name": "Onix"
    },
    {
        "Make_Name": "DODGE",
        "Model_Name": "Avenger"
    },
    {
        "Make_Name": "DODGE",
        "Model_Name": "Charger"
    },
    {
        "Make_Name": "DODGE",
        "Model_Name": "Challenger"
    },
    {
        "Make_Name": "DODGE",
        "Model_Name": "Dart"
    },
    {
        "Make_Name": "DODGE",
        "Model_Name": "Durango"
    },
    {
        "Make_Name": "DODGE",
        "Model_Name": "Nitro"
    },
    {
        "Make_Name": "DODGE",
        "Model_Name": "Ram"
    },
    {
        "Make_Name": "HONDA",
        "Model_Name": "Accord"
    },
    {
        "Make_Name": "HONDA",
        "Model_Name": "Civic"
    },
    {
        "Make_Name": "HONDA",
        "Model_Name": "Crv"
    },
    {
        "Make_Name": "HONDA",
        "Model_Name": "Element"
    },
    {
        "Make_Name": "HONDA",
        "Model_Name": "Pilot"
    },
    {
        "Make_Name": "NISSAN",
        "Model_Name": "Maxima"
    },
    {
        "Make_Name": "NISSAN",
        "Model_Name": "Frontier"
    },
    {
        "Make_Name": "NISSAN",
        "Model_Name": "Titan"
    },
    {
        "Make_Name": "NISSAN",
        "Model_Name": "Pathfinder"
    },
    {
        "Make_Name": "NISSAN",
        "Model_Name": "350z"
    },
    {
        "Make_Name": "NISSAN",
        "Model_Name": "GTR"
    },
    {
        "Make_Name": "MAZDA",
        "Model_Name": "Tribute"
    },
    {
        "Make_Name": "MAZDA",
        "Model_Name": "MX-5"
    },
    {
        "Make_Name": "MAZDA",
        "Model_Name": "RX-8"
    },
    {
        "Make_Name": "MAZDA",
        "Model_Name": "Mazda3"
    },
    {
        "Make_Name": "MAZDA",
        "Model_Name": "Mazda5"
    },
    {
        "Make_Name": "MAZDA",
        "Model_Name": "CX-7"
    },
    {
        "Make_Name": "MAZDA",
        "Model_Name": "CX-9"
    },
    {
        "Make_Name": "MAZDA",
        "Model_Name": "Mazda6"
    },
    {
        "Make_Name": "MAZDA",
        "Model_Name": "Mazda2"
    },
    {
        "Make_Name": "MAZDA",
        "Model_Name": "MPV"
    },
    {
        "Make_Name": "MAZDA",
        "Model_Name": "CX-5"
    },
    {
        "Make_Name": "MAZDA",
        "Model_Name": "B-Series"
    },
    {
        "Make_Name": "MAZDA",
        "Model_Name": "Protege"
    },
    {
        "Make_Name": "MAZDA",
        "Model_Name": "Millenia"
    },
    {
        "Make_Name": "MAZDA",
        "Model_Name": "626"
    },
    {
        "Make_Name": "MAZDA",
        "Model_Name": "323"
    },
    {
        "Make_Name": "MAZDA",
        "Model_Name": "MX-3"
    },
    {
        "Make_Name": "MAZDA",
        "Model_Name": "929"
    },
    {
        "Make_Name": "MAZDA",
        "Model_Name": "RX-7"
    },
    {
        "Make_Name": "MAZDA",
        "Model_Name": "MX-6"
    },
    {
        "Make_Name": "MAZDA",
        "Model_Name": "CX-3"
    },
    {
        "Make_Name": "MAZDA",
        "Model_Name": "GLC"
    },
    {
        "Make_Name": "MAZDA",
        "Model_Name": "Navajo"
    },
    {
        "Make_Name": "MAZDA",
        "Model_Name": "CX-30"
    },
    {
        "Make_Name": "JEEP",
        "Model_Name": "Wrangler"
    },
    {
        "Make_Name": "JEEP",
        "Model_Name": "Liberty"
    },
    {
        "Make_Name": "JEEP",
        "Model_Name": "Cherokee"
    },
    {

        "Make_Name": "JEEP",
        "Model_Name": "Compass"
    },
    {

        "Make_Name": "JEEP",
        "Model_Name": "Patriot"
    },
    {

        "Make_Name": "JEEP",
        "Model_Name": "Commander"
    },
    {

        "Make_Name": "JEEP",
        "Model_Name": "Grand Cherokee"
    },
    {

        "Make_Name": "JEEP",
        "Model_Name": "Renegade"
    },
    {

        "Make_Name": "JEEP",
        "Model_Name": "Grand Wagoneer"
    },
    {

        "Make_Name": "JEEP",
        "Model_Name": "Comanche"
    },
    {
        "Make_Name": "JEEP",
        "Model_Name": "Wagoneer"
    },
    {
        "Make_Name": "JEEP",
        "Model_Name": "J-10"
    },
    {
        "Make_Name": "JEEP",
        "Model_Name": "J-20"
    },
    {
        "Make_Name": "JEEP",
        "Model_Name": "CJ-7"
    },
    {
        "Make_Name": "JEEP",
        "Model_Name": "CJ-8 Scrambler"
    },
    {
        "Make_Name": "JEEP",
        "Model_Name": "CJ-5"
    },
    {
        "Make_Name": "JEEP",
        "Model_Name": "CJ-6"
    },
    {
        "Make_Name": "JEEP",
        "Model_Name": "Wrangler JK"
    },
    {
        "Make_Name": "JEEP",
        "Model_Name": "Gladiator"
    }
]

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