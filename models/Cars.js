const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
    model: { type: String, required: true },
    make: { type: String, required: true }
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
