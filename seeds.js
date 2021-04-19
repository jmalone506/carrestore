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
"Count": 14,
"Message": "Response returned successfully",
"SearchCriteria": "Make:440",
"Results": [
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
"Make_Name": "TOYOTA",,
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
"Make_ID": 448,
"Make_Name": "TOYOTA",
"Model_ID": 24949,
"Model_Name": "Yaris iA"
},
{
"Make_ID": 448,
"Make_Name": "TOYOTA",
"Model_ID": 28070,
"Model_Name": "RAV4 Prime"
},
{
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 9308,
"Model_Name": "CFT8000"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 9312,
"Model_Name": "CF7000"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 10378,
"Model_Name": "Mustang"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 11942,
"Model_Name": "F-150"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 13958,
"Model_Name": "Tempo"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 13977,
"Model_Name": "B600"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 13978,
"Model_Name": "B700"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 13979,
"Model_Name": "F-600"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 13980,
"Model_Name": "Recreational Vehicle"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 13981,
"Model_Name": "F-590"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 13983,
"Model_Name": "P600"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 14148,
"Model_Name": "CL9000"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 14149,
"Model_Name": "CLT9000"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 14150,
"Model_Name": "Bronco II"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 14152,
"Model_Name": "FT800"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 14153,
"Model_Name": "CT8000"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 14154,
"Model_Name": "C800"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 14155,
"Model_Name": "C8000"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 14196,
"Model_Name": "Laser"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 14199,
"Model_Name": "LTD"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 14614,
"Model_Name": "Fairmont"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 14618,
"Model_Name": "Granada"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 14930,
"Model_Name": "'34"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 15160,
"Model_Name": "CF6000"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 15194,
"Model_Name": "B7000"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 15195,
"Model_Name": "C7000"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 15197,
"Model_Name": "F7000"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 15198,
"Model_Name": "F8000"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 15203,
"Model_Name": "FT8000"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 15204,
"Model_Name": "Courier"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 15205,
"Model_Name": "B6000"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 15206,
"Model_Name": "C600"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 15208,
"Model_Name": "C700"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 15209,
"Model_Name": "F6000"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 15223,
"Model_Name": "LN600"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 15225,
"Model_Name": "LN700"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 15251,
"Model_Name": "L800"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 15252,
"Model_Name": "LT800"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 15254,
"Model_Name": "LN800"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 15255,
"Model_Name": "LNT800"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 15273,
"Model_Name": "E-100"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 15280,
"Model_Name": "F-100"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 15291,
"Model_Name": "CT800"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 17774,
"Model_Name": "Ecosport"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 25742,
"Model_Name": "Expedition EL"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 27411,
"Model_Name": "Bronco Sport"
},
{
"Make_ID": 460,
"Make_Name": "FORD",
"Model_ID": 27440,
"Model_Name": "Mach-E"
},{
 "Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 1828,
"Model_Name": "Aveo"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 1829,
"Model_Name": "Camaro"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 1830,
"Model_Name": "Caprice Police Vehicle"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 1831,
"Model_Name": "Corvette"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 1832,
"Model_Name": "Cruze"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 1833,
"Model_Name": "Impala"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 1834,
"Model_Name": "Malibu"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 1835,
"Model_Name": "Sonic"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 1836,
"Model_Name": "Spark"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 1837,
"Model_Name": "SS"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 1838,
"Model_Name": "Volt"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 1846,
"Model_Name": "Captiva Sport"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 1847,
"Model_Name": "Equinox"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 1848,
"Model_Name": "Express"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 1849,
"Model_Name": "Orlando"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 1850,
"Model_Name": "Silverado"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 1851,
"Model_Name": "Suburban"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 1852,
"Model_Name": "Tahoe"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 1853,
"Model_Name": "Traverse"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 1854,
"Model_Name": "Tracker"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 1921,
"Model_Name": "City Express"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 3531,
"Model_Name": "Geo Prizm"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 3876,
"Model_Name": "Avalanche"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 4047,
"Model_Name": "Matiz"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 4086,
"Model_Name": "Colorado"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 4234,
"Model_Name": "Cobalt"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 4251,
"Model_Name": "Optra"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 4255,
"Model_Name": "Kalos"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 4548,
"Model_Name": "Trailblazer"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 4586,
"Model_Name": "HHR"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 4588,
"Model_Name": "Uplander"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 4687,
"Model_Name": "W4"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 4688,
"Model_Name": "W5"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 4773,
"Model_Name": "Monte Carlo"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 4889,
"Model_Name": "SSR"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 4992,
"Model_Name": "Epica"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 8834,
"Model_Name": "Cavalier"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 8835,
"Model_Name": "U100"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 8881,
"Model_Name": "3 ton"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 8882,
"Model_Name": "Astro Van"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 8883,
"Model_Name": "Venture"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 9016,
"Model_Name": "B7"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 9064,
"Model_Name": "Lumina"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 9088,
"Model_Name": "Alero"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 9115,
"Model_Name": "Caprice"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 9116,
"Model_Name": "Corsica"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 9117,
"Model_Name": "Beretta"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 9139,
"Model_Name": "Hearse/Limo"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 10043,
"Model_Name": "Metro"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 10978,
"Model_Name": "GMT-400"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 10979,
"Model_Name": "Military Truck"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 10983,
"Model_Name": "Forward Control"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 10988,
"Model_Name": "Trax"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 11483,
"Model_Name": "S-10 Pickup"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 11489,
"Model_Name": "C/K Pickup"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 11491,
"Model_Name": "P - Series"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 11497,
"Model_Name": "Lumina APV"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 11502,
"Model_Name": "Blazer"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 13634,
"Model_Name": "Impala Limited"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 13672,
"Model_Name": "Bolt EV"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 13737,
"Model_Name": "3500HD"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 13738,
"Model_Name": "5500HD"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 13739,
"Model_Name": "3500 / 4500"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 13740,
"Model_Name": "4500HD"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 13741,
"Model_Name": "4500XD"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 13742,
"Model_Name": "5500XD"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14032,
"Model_Name": "T-Series"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14033,
"Model_Name": "C4"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14034,
"Model_Name": "C5"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14035,
"Model_Name": "C6"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14036,
"Model_Name": "C7"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14037,
"Model_Name": "C8"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14040,
"Model_Name": "W7"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14166,
"Model_Name": "Hearse/Limo Commercial Chassis"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14206,
"Model_Name": "W3"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14450,
"Model_Name": "W6"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14451,
"Model_Name": "D7"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14452,
"Model_Name": "P6S"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14457,
"Model_Name": "S-10"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14458,
"Model_Name": "P Truck Forward"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14460,
"Model_Name": "Celebrity"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14461,
"Model_Name": "Geo Spectrum"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14462,
"Model_Name": "G-Series"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14464,
"Model_Name": "Cutaway Chassis"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14465,
"Model_Name": "Motorhome Chassis"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14475,
"Model_Name": "Chevette"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14501,
"Model_Name": "Hi-Cube"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14502,
"Model_Name": "Cutaway Van"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14506,
"Model_Name": "S7"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14513,
"Model_Name": "Geo Sprint"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14515,
"Model_Name": "Nova"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14544,
"Model_Name": "S6"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14545,
"Model_Name": "R Conventional"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14546,
"Model_Name": "V Conventional"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14547,
"Model_Name": "Citation"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14616,
"Model_Name": "Bus Chassis"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14617,
"Model_Name": "Heavy Conventional"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14619,
"Model_Name": "Aluminum Tilt"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 14637,
"Model_Name": "El Camino"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 15634,
"Model_Name": "LUV"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 17528,
"Model_Name": "Malibu Classic"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 22511,
"Model_Name": "3500"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 22512,
"Model_Name": "4500"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 24257,
"Model_Name": "Bolt Incomplete"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 24759,
"Model_Name": "FTR / 6500XD"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 24868,
"Model_Name": "6500XD"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 24906,
"Model_Name": "Silverado HD"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 25279,
"Model_Name": "Silverado LD"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 25609,
"Model_Name": "7500XD"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 26327,
"Model_Name": "GM51P"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 27018,
"Model_Name": "W3500/W4500"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 27019,
"Model_Name": "W5500/W5500HD"
},
{
"Make_ID": 467,
"Make_Name": "CHEVROLET",
"Model_ID": 27445,
"Model_Name": "Onix"
},
{
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

