const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
    model: { type: String, required: true },
    make: { type: String, required: true },
    year: {Number}
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
