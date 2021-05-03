const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.Car = require("./Cars");
db.POst = require("./Post")

module.exports = db;