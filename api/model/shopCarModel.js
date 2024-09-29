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

const saveOrderSchema = new mongoose.Schema({
        userId: String,
        products: [Object],
        total: Number,
        orderDate: { type: Date, default: Date.now },
        status: {type:String, default:'completada'}
}, { versionKey: false })

const saveOrderModel = mongoose.model('saveOrder',saveOrderSchema,'Orders');
const allproductsInCarModelByUserModel = mongoose.model('allproductsInCarModelByUser', shopCarSchema, 'shoppingCart');

module.exports = { saveOrderModel, allproductsInCarModelByUserModel};