const { model } = require("mongoose")

const mongoose = require = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number

})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel 
