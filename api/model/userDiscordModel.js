const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  discordId: String,
  googleId: String,
  name: String,
  email: String,
  urlPicture: String
}, {
    versionKey: false 
  });

module.exports = mongoose.model('User', userSchema, "Users");
