const mongoose = require('mongoose');

let citySchema = new mongoose.Schema({
  cityid : String,
  cityimage : { data: Buffer, contentType: String }

});

const Cities = mongoose.model('cities', citySchema);

module.exports = Cities;