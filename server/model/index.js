
const mongoose = require('mongoose');

mongoose.connect('mongodb://', { useNewUrlParser: true });

var Users = require('./users');
var Posts = require('./posts');
var Cities = require('./cities');

module.exports = {
  Users: Users,
  Posts: Posts,
  Cities: Cities
};