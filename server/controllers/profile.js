//connecting db
const mongoose = require('mongoose');

//adding models
const database = require('../model');

const repeatedcode = require('../repeatedcode');

var badHttpRequestCode = 400;

function getProfile(request, response) {

    let firstname = request.body.firstname;
    let lastname = request.body.lastname;
    let location = request.body.location;
    let password = request.body.password;
    let email = request.body.email;
    let image = request.body.image;

    // find user in database
    database.Users.findOne({ email: email}, function (error, results) {
        if (error) {
            console.log('error finding user');
            response.status(badHttpRequestCode).send("something went wrong");
            return;
        }

        results.firstname = firstname; 
        results.lastname = lastname;
        results.location = location;
        results.userImg = image;

        results.save(function (error2, saved) {
            if (error2) {
                response.status(500).send("something failed");
                return;
            }

            response.json(saved);
        });
    });
}

// exporting signin for other files
module.exports = {
    getProfile: getProfile
};




