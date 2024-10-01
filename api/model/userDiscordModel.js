const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  discordId: String,
  username: String,
  email: String,
  avatar: String,
  // ... cualquier otro campo que quieras mantener
});

module.exports = mongoose.model('User', userSchema);