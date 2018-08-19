const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  email: String,
  password: String,
  location: String,
  password: String,
  joinDate: String,
  userImg: String,
});

const Users = mongoose.model('users', userSchema);

module.exports = Users;