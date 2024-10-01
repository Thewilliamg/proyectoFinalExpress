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
    productImg: { type: String, required: true },
    productDiscount: { type: String, required: true },
    marketName: {type: String, required: true},
    dateExpiration: {type: Date, required: true}
})

const userSchemaGet = new mongoose.Schema({
    name: { type: String, required: false },
    urlPicture: {type: String, required:false},
    email: { type: String, required: false },
    numberPhone: { type: Number, required: false },
    gender: { type: String, required: false},
    birthDate: { type: Date, required: false },
});

const getUserSideBarProfileSchema = new mongoose.Schema({
    nickName: String,
    img:String
})

const newUserSearcherSchema = new mongoose.Schema({
    userId : mongoose.ObjectId
})

const UserPhoneModel = mongoose.model('UserPhoneModel', userSchemaPhone, "Users"); 
const UserEmailModel = mongoose.model('UserEmailModel', userSchemaEmail, "Users");
const UserSignModel = mongoose.model('UserSignModel', userSchema, "Users");
const UserCouponModel = mongoose.model('UserCouponModel', userCouponSchema, "Users")
const UserModel = mongoose.model('UserModel', userSchemaGet, "Users")
const getUserProfileSidebarModel = mongoose.model('getUserProfileModel', getUserSideBarProfileSchema, "Users");
const newUserSearcherModel = mongoose.model('newUserSearcher', newUserSearcherSchema, 'Users');

module.exports = {
    UserSignModel,
    UserPhoneModel,
    UserEmailModel,
    UserCouponModel,
    UserModel,
    getUserProfileSidebarModel,
    newUserSearcherModel
}