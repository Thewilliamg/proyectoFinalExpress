const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: Number, required: true },
    urlPicture: { type: String, required: true, unique: true },
    address: { type: String, required: true, unique: true },
    numberPhone: { type: String, required: true, unique: true },
    favorites: { type: Array, required: true, unique: true },
    coupon: { type: Array, required: true, unique: true },
    gender: { type: String, required: true, unique: true },
    birthDate: { type: Date, required: true, unique: true },
});

module.exports = mongoose.model('User', userSchema, "Users");