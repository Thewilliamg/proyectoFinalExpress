const mongoose = require('mongoose');

const workshopIdSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    video: { type: String, required: true }
}, { versionKey: false } );

const WorShopId = mongoose.model('WorShopId', workshopIdSchema, "Markets"); 

module.exports = {
    WorShopId
}