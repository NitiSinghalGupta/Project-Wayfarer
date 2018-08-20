//connecting db
const mongoose = require('mongoose');

//adding models
const database = require('../model');

const repeatedcode = require('../repeatedcode');

var badHttpRequestCode = 400;

function doAddPost(request, response) {

    let city = request.body.city;
    let title = request.body.title;
    let text = request.body.location;
 
    let json = {
        city: city,
        title: title,
        text: text
    };

            // create new user
            database.Users.create(json, function (error, newUser) {
                if (error) {
                    console.log('error creating new user');
    
                    // db error
                    response.status(500).send('insert user into database failed');
                    return;
                }
    
                console.log('new user created as: ', newUser);
                response.json(newUser);
            });

}


function doEditPost(request, response) {

    

}


function getPostForCity(request, response) {

    // find user in database
    database.Posts.find({ city: city}, function (error, results) {
        if (error) {
            console.log('error finding user');
            response.status(badHttpRequestCode).send("something went wrong");
            return;
        }
    });
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
