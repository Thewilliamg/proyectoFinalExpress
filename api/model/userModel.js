const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: false },
    password: { type: Number, required: true },
    urlPicture: { type: String, required: false },
    numberPhone: { type: String, required: false },
    gender: { type: String, required: true },
    birthDate: { type: Date, required: true },
    favorites: { type: Array, required: false },
    coupon: { type: Array, required: false }
}, { versionKey: false } );

module.exports = mongoose.model('User', userSchema, "Users");