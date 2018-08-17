//add repeated code
const repeatedcode = require('../repeatedcode');

//add db
const database = require('../model');

var HTTP_SERVER_ERROR = 500;

//function when receive call from browser
function doSignUp(request, response) {
    let email = request.body.email;
    let password = request.body.password;

    //mandatory fields chk here
    if (repeatedcode.isEmpty(email)) {
        console.log('email is empty');
        response.status(400).send('Email address is required');
        return;
    }

    if (repeatedcode.isEmpty(password)) {
        console.log('password is empty');
        response.status(400).send('Password is required');
        return;
    }

    console.log('email and password are ok');

    let json = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };

    addNewUserToDatabase(json, request, response);
}

//moving addNewUserToDatabase function from server.js and commenting it out there
function addNewUserToDatabase(json, request, response) {
    console.log('add new user to db', json);

    // let's see if the user exists in the database or not
    database.Users.find({ email: json.email }, function (error, results) {
        if (error) {
            // database error
            console.log(error);
            response.status(500).send("something went wrong");
            return;
        }

        if (results && results.length > 0) {
            // user already exists in my personal workspace
            // we cannot register the user again
            // thus we will send the error back
            console.log('user already exists', results);
            response.status(500).send('User already exists');
            return;
        }

        console.log('no user - create in db');

        // now that user does not exist here
        // we can insert the record in the database
        database.Users.create(json, function (error, newUser) {
            if (error) {
                console.log('error creating new user');

                // database error again
                response.status(500).send('insert user into database failed');
                return;
            }

            console.log('new user created as: ', newUser);

            let newSettingsJson = {
                email: json.email,
                stocks: [],
                todos: [],
                sites: [],
                sunsign: ''
            };

            database.Settings.create(newSettingsJson, function (error2, newSettings) {
                if (error2) {
                    console.log('error creating settings record');

                    response.status(500).send('insert user settings into database failed');
                    return;
                }

                response.json(newSettings);
            });
        });
    });
};

//exporting so that available to all other classes
module.exports = {
    doSignUp: doSignUp
};
