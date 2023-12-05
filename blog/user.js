const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  author: String,
  blog: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;