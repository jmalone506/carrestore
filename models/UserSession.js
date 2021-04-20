const mongoose = require("mongoose")


const userSessionSchema = mongoose.Schema({
    userId: {
        type: Number,
        default: -1
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
});



export default mongoose.model("UserSession", userSessionSchema);