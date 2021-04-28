const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
    Model_Name: { 
        type: String, 
        required: true 
    },

    Make_Name: { 
        type: String, 
        required: true 
    }
});

const Car = mongoose.model("carsdb", carSchema);

module.exports = Car;
