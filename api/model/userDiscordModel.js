const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  discordId: String,
  googleId: String,
  username: String,
  email: String,
  avatar: String
}, {
    versionKey: false 
  });

module.exports = mongoose.model('User', userSchema);
