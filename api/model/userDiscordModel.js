const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  discordId: { type: String, unique: true, sparse: true },
  googleId: { type: String, unique: true, sparse: true },
  name: { type: String, default: null },
  email: { type: String, unique: true, sparse: true },
  urlPicture: String
}, {
  versionKey: false 
});

module.exports = mongoose.model('User', userSchema, "Users");
