//connecting db
const mongoose = require('mongoose');

//adding models
const database = require('../model');

const repeatedcode = require('../repeatedcode');

var badHttpRequestCode = 400;

function doAddPost(request, response) {

    

}


function doEditPost(request, response) {

    

}


function getPostForCity(request, response) {

    

}

function getPostForUser(request, response) {



}

// exporting signin for other files
module.exports = {
    doAddPost : doAddPost,
    doEditPost : doEditPost,
    getPostForCity : getPostForCity,
    getPostForUser : getPostForUser 

};
