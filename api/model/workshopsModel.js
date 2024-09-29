const mongoose = require('mongoose')

const workshopsSchema = new mongoose.Schema({
  name: {type:String},
  description: {type:String},
  modality: {type:String},
  picture: {type:String},
  startDate: {type:Date},
  duration: {type:String},
  schedule: {type:String},
  materialsProvided: [String],
  requiredMaterials: [String],
  registeredUsers: [mongoose.Schema.Types.ObjectId],
  marketId: mongoose.Schema.Types.ObjectId,
})

const workshopModel = mongoose.model('workshopModel', workshopsSchema, "Workshops")

module.exports ={
  workshopModel
}