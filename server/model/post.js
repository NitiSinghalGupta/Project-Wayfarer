const mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
  userid : string,
  postid : String,
  cityid : String,
  posttext : String,
  postimage : { data: Buffer, contentType: String }

});

const Posts = mongoose.model('posts', postSchema);

module.exports = Posts;