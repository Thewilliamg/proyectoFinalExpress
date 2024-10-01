const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    favorites: { type: Object, required: false },
    market: { type: Object, required: false }
});

const productsFavoriteSchema = mongoose.model('productsFavoriteSchema', productsSchema, "Users");

module.exports = productsFavoriteSchema