/**
 * @module getAllOrdersPurchaseByUserModel
 * @description Modelo para las órdenes de compra de usuarios
 */

const mongoose = require('mongoose');

/**
 * @typedef {Object} Order
 * @property {mongoose.Types.ObjectId} orderId - El ID de la orden
 * @property {string} [imgProduct] - La URL de la imagen del producto
 * @property {string} titleProduct - El título del producto
 * @property {number} priceProduct - El precio del producto
 * @property {string} measureProduct - La unidad de medida del producto
 * @property {string} weightProduct - El peso del producto
 * @property {string} marketName - El nombre del mercado
 */

/**
 * @type {mongoose.Schema<Order>}
 */
const orderSchema = new mongoose.Schema({
    orderId: mongoose.ObjectId,
    imgProduct: { type: String },
    titleProduct: { type: String, required: true },
    priceProduct: Number,
    measureProduct: String,
    weightProduct: String,
    marketName: String
});

/**
 * @type {mongoose.Model<Order>}
 */
const getAllOrdersPurchaseByUserModel = mongoose.model('getAllOrdersPurchaseModelByUser', orderSchema, "Orders");

module.exports = { getAllOrdersPurchaseByUserModel };