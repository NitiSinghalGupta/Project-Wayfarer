const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstname: String,
  lastname: String,
  location: String,
  password: String,
  joinDate: { 
    type: Date, 
    default: Date.now
     },
  userImg: String,
});

const Users = mongoose.model('users', userSchema);

module.exports = Users;