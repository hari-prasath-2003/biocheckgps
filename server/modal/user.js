const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    uid: {
        type: Number,
    },
    post: {
        type: String
    }
})

module.exports = mongoose.model("user", UserSchema)