const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "Firstname is required"]
    }, 
    query: {
        type: String,
        required: [true, "Lastname is required"]
    }
})

const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel
