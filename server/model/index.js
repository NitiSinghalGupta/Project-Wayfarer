
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/wayfarer", { useNewUrlParser: true });

var Users = require('./user');
var Posts = require('./post');
var Cities = require('./cities');

module.exports = {
  Users: Users,
  Posts: Posts,
  Cities: Cities
};