
const mongoose = require('mongoose');

mongoose.connect('mongodb://nitisinghal:def123abc@ds137687.mlab.com:37687/niti-personal-space', { useNewUrlParser: true });

var Users = require('./users');
var Posts = require('./posts');
var Cities = require('./cities');

module.exports = {
  Users: Users,
  Posts: Posts,
  Cities: Cities
};