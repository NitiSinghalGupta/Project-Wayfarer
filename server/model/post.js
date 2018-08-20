const mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
  postID : String,
  email : String,
  city : String,
  title: String,
  text : String,
  date : { 
    type: Date, 
    default: Date.now
     }, 
});

const Posts = mongoose.model('posts', postSchema);

module.exports = Posts;