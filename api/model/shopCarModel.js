const mongoose = require('mongoose');

const shopCarSchema = new mongoose.Schema({
        productId: { type: String, required: true },
        quantity: { type: Number, required: true },
        name: { type: String, required: true },
        marketName: { type: String, required: true },
        size: { type: String, required: true },
        picture: { type: String, required: true },
        weight: { type: String, required: true },
        price: { type: String, required: true }
});
const productsSchema = new mongoose.Schema({
        productId: mongoose.ObjectId,
        quantity: { type: Number, required: true },
        purchasePrice: Number
}, { _id: false })

const saveOrderSchema = new mongoose.Schema({
        userId: mongoose.ObjectId,
        products: [productsSchema],
        total: Number,
        orderDate: { type: Date, default: Date.now },
        status: { type: String, default: 'completada' }
}, { versionKey: false });

const addToCarSchema = new mongoose.Schema({
        userId: { type: mongoose.Schema.Types.ObjectId, required: true },
        productId: { type: mongoose.Schema.Types.ObjectId, required: true },
        quantity: { type: Number, default: 1 }
}, { versionKey: false });

const saveOrderModel = mongoose.model('saveOrder', saveOrderSchema, 'Orders');
const allproductsInCarModelByUserModel = mongoose.model('allproductsInCarModelByUser', shopCarSchema, 'shoppingCart');
const addToCarModel = mongoose.model('addToCarModel', addToCarSchema, 'shoppingCart');

module.exports = { saveOrderModel, allproductsInCarModelByUserModel, addToCarModel };