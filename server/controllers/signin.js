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
        return;
    }

    if (repeatedcode.isEmpty(password)) {
        console.log("password");
        response.status(badHttpRequestCode).send('password is required');
        return;
    }

    // find user in database
    database.Users.findOne({ email: email, password: password }, function (error, dbUser) {
        if (error) {
            console.log('error finding user');
            response.status(badHttpRequestCode).send("something went wrong");
            return;
        }

        response.json(dbUser);
    });
}

// exporting signin 
module.exports = {
    doSignIn: doSignIn
};




