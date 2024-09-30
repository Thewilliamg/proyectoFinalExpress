const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: mongoose.ObjectId,
    imgProduct: { type: String },
    titleProduct: { type: String, required: true },
    priceProduct: Number,
    measureProduct: String,
    weightProduct: String,
    marketName: String
});

const getAllOrdersPurchaseByUserModel = mongoose.model('getAllOrdersPurchaseModelByUser', orderSchema, "Orders");

 module.exports = {getAllOrdersPurchaseByUserModel}