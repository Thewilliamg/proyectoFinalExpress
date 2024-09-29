const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: false },
    email: { type: String, required: false },
    password: { type: String, required: true },
    numberPhone: { type: Number, required: false },
}, { versionKey: false } );

const userSchemaPhone = new mongoose.Schema({
    name: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    numberPhone: { type: Number, required: true, unique: true },
    gender: { type: String, required: true },
    birthDate: { type: Date, required: true },
    urlPicture: { type: String, required: false },
    favorites: { type: Array, required: false },
    coupon: { type: Array, required: false }
}, { versionKey: false } );

const userSchemaEmail = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    birthDate: { type: Date, required: true },
    urlPicture: { type: String, required: false },
    favorites: { type: Array, required: false },
    coupon: { type: Array, required: false }
}, { versionKey: false } );

const userCouponSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    userCoupons: {type: Array, required: true}
})

const UserPhoneModel = mongoose.model('UserPhoneModel', userSchemaPhone, "Users"); 
const UserEmailModel = mongoose.model('UserEmailModel', userSchemaEmail, "Users");
const UserSignModel = mongoose.model('UserSignModel', userSchema, "Users");
const UserCouponModel = mongoose.model('UserCouponModel', userCouponSchema, "Users")

module.exports = {
    UserSignModel,
    UserPhoneModel,
    UserEmailModel,
    UserCouponModel
}