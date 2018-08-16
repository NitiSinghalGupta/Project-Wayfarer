const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const Users = mongoose.model('users', userSchema);

module.exports = Users;