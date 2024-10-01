/**
 * @module ProductModel
 * @description Modelo para los productos
 */

const mongoose = require('mongoose');

/**
 * @typedef {Object} Product
 * @property {string} name - El nombre del producto
 * @property {string} description - La descripción del producto
 * @property {number} price - El precio del producto
 * @property {string} picture - La URL de la imagen del producto
 * @property {number} stock - La cantidad en stock del producto
 * @property {number} size - El tamaño del producto
 * @property {string} [discount] - El descuento aplicado al producto (opcional)
 * @property {Object} categoryData - Datos de la categoría del producto
 * @property {Object} marketData - Datos del mercado del producto
 */

/**
 * @type {mongoose.Schema<Product>}
 */
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
});

/**
 * @type {mongoose.Model<Product>}
 */
const ProductModel = mongoose.model('ProductModel', productSchema, "Products");

module.exports = ProductModel;