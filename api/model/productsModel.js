/**
 * @module ProductModels
 * @description Modelos relacionados con productos y mercados
 */

const mongoose = require('mongoose');

/**
 * @typedef {Object} MarketProduct
 * @property {string} marketName - El nombre del mercado
 * @property {string} marketImg - La URL de la imagen del mercado
 * @property {string} productId - El ID del producto
 * @property {string} picture - La URL de la imagen del producto
 * @property {string} name - El nombre del producto
 * @property {number} cost - El costo del producto
 * @property {number} stock - La cantidad en stock del producto
 */

/**
 * @type {mongoose.Schema<MarketProduct>}
 */
const productsSchema = new mongoose.Schema({
    marketName: { type: String, required: true },
    marketImg: { type: String, required: true },
    productId: { type: String, required: true },
    picture: { type: String, required: true },
    name: { type: String, required: true },
    cost: { type: Number, required: true },
    stock: { type: Number, required: true },
});

/**
 * @typedef {Object} ProductDetail
 * @property {string} marketName - El nombre del mercado
 * @property {string} picture - La URL de la imagen del producto
 * @property {string} name - El nombre del producto
 * @property {number} cost - El costo del producto
 * @property {string} size - El tamaño del producto
 * @property {string} discount - El descuento aplicado al producto
 * @property {number} stock - La cantidad en stock del producto
 * @property {string} description - La descripción del producto
 */

/**
 * @type {mongoose.Schema<ProductDetail>}
 */
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

/**
 * @typedef {Object} AllProduct
 * @property {string} marketName - El nombre del mercado
 * @property {string} picture - La URL de la imagen del producto
 * @property {string} name - El nombre del producto
 * @property {number} cost - El costo del producto
 * @property {number} stock - La cantidad en stock del producto
 */

/**
 * @type {mongoose.Schema<AllProduct>}
 */
const allProductsSchema = new mongoose.Schema({
    marketName: { type: String, required: true },
    picture: { type: String, required: true },
    name: { type: String, required: true },
    cost: { type: Number, required: true },
    stock: { type: Number, required: true },
});

/**
 * @type {mongoose.Model<MarketProduct>}
 */
const AllProductsByMarketModel = mongoose.model('AllProductsByMarketModel', productsSchema, "Products");

/**
 * @type {mongoose.Model<ProductDetail>}
 */
const productModel = mongoose.model('productModel', productSchema, "Products");

/**
 * @type {mongoose.Model<AllProduct>}
 */
const allProductsModel = mongoose.model('allProductsModel', allProductsSchema, "Products");

module.exports = { AllProductsByMarketModel, productModel, allProductsModel };