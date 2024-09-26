const mongoose = require('mongoose');

const marketsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    location: { type: String, required: true }
});

module.exports = mongoose.model('AllMarkets', marketsSchema, "Markets");