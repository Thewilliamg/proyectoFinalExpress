const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    picture: { type: String, required: true },
    stock: { type: Number, required: true },
    size: { type: Number, required: true },
    discount: { type: String, required: false },
    categoryData: { type: Object, required: true },
    marketData: { type: Object, required: true }
})

const ProductModel = mongoose.model('ProductModel', productSchema, "Products")

module.exports = ProductModel