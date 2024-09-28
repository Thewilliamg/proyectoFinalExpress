const mongoose = require('mongoose');

const shopCarSchema = new mongoose.Schema({
        productId: {type:String,required:true},
        quantity: {type:Number,required:true},
        name: {type:String,required:true},
        marketName: {type:String,required:true},
        size: {type:String,required:true},
        picture: {type:String,required:true},
        weight: {type:String,required:true},
        price: {type:String,required:true}
});

module.exports = mongoose.model('allproductsInCarModelByUserModel',shopCarSchema,'shoppingCart')