const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buySchema = new Schema({
    thumbnail: {
        type: String,
        default: ""
    },
    title: {
        type: String
    },

    paragraph: {
        type: String
    },

    href: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now
    }

});

const Buy = mongoose.model("buying", buySchema);

module.exports = Buy;
