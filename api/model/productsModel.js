const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    marketName: { type: String, required: true },
    marketImg: { type: String, required: true },
    productId: { type: String, required: true },
    picture: { type: String, required: true },
    name: { type: String, required: true },
    cost: { type: Number, required: true },
    stock: { type: Number, required: true },
});

const productSchema = new mongoose.Schema({
    marketName: { type: String, required: true },
    picture: { type: String, required: true },
    name: { type: String, required: true },
    cost: { type: Number, required: true },
    size: { type: String, required: true },
    discount: { type: String, required: true },
    stock: { type: Number, required: true },
    description: { type: String, required: true },
});

const allProductsSchema = new mongoose.Schema({
    marketName: { type: String, required: true },
    picture: { type: String, required: true },
    name: { type: String, required: true },
    cost: { type: Number, required: true },
    stock: { type: Number, required: true },
});
module.exports = mongoose.model('AllProductsByMarketModel', productsSchema, "Products");
module.exports = mongoose.model('productModel', productSchema, "Products");
module.exports = mongoose.model('allProductsModel', allProductsSchema, "Products");
