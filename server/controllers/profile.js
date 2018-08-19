//connecting db
const mongoose = require('mongoose');

//adding models
const database = require('../model');

const repeatedcode = require('../repeatedcode');

//bad http request code
var badHttpRequestCode = 400;

function getProfile(request, response) {

    // pass username pwd
    let firstname = request.body.firstname;
    let lastname = request.body.lastname;
    let location = request.body.location;
    let password = request.body.password;

    console.log(`sign in user for ${email} and password ${password}`);

    // find user in database
    database.Users.findOne({ email: email, password: password }, function (error, results) {
        if (error) {
            console.log('error finding user');
            response.status(badHttpRequestCode).send("something went wrong");
            return;
        }

        if (!results || results.length == 0) {
            console.log('no user in database');
            response.status(badHttpRequestCode).send("user not found");
            return;
        }

         
    });
}

// exporting signin for other files
module.exports = {
    getProfile: getProfile
};




