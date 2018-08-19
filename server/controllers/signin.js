//connecting db
const mongoose = require('mongoose');

//adding models
const database = require('../model');

const repeatedcode = require('../repeatedcode');

//bad http request code
var badHttpRequestCode = 400;

function doSignIn(request, response) {

    // pass username pwd
    let email = request.body.email;
    let password = request.body.password;

    console.log(`sign in user for ${email} and password ${password}`);

    //empty check
    if (repeatedcode.isEmpty(email)) {
        console.log("username empty");
        response.status(badHttpRequestCode).send('Email address is required');
    }

    if (repeatedcode.isEmpty(password)) {
        console.log("password");
        response.status(badHttpRequestCode).send('password is required');
    }

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

        //when the user is found in the db than ie wen results have some value
        // return value to front end
        let user = results[0];

        response.json(user);
    });
}

// exporting signin for other files
module.exports = {
    doSignIn: doSignIn
};




