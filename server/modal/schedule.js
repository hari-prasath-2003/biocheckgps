const mongoose = require("mongoose")
const scheduleSchema = new mongoose.Schema({

    uid: {
        type: Number,
    },
    location: {
        type: String
    },
    coordinates: {
        type: { latitude: Number, longitude: Number }
    },
    biometricTime: {
        type: Date
    },
    intime: {
        type: String
    }, date: {
        type: String
    }, status: {
        default: "pending",
        type: String
    }

})

module.exports = mongoose.model("sehedule", scheduleSchema)