// code for empty check
const repeatedcode = require('../repeatedcode');

//add db
const database = require('../model');

var HTTP_SERVER_ERROR = 500;

//function when receive call from browser
function doSignUp(request, response) {
    // console.log(request);
    // response.json({msg: 'Signup Endpoint'});
    console.log(request.body);

    
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
        email: email,
        password: password
    };

    addNewUserToDatabase(json, request, response);
}

//addNewUserToDatabase
function addNewUserToDatabase(json, request, response) {
    console.log('add new user to db', json);

    // see if user exists
    database.Users.find({ email: json.email }, function (error, results) {
        if (error) {
            // db error
            console.log(error);
            response.status(500).send("something went wrong");
            return;
        }

        if (results && results.length > 0) {
            // user already exists throw error
            console.log('user already exists', results);
            response.status(500).send('User already exists');
            return;
        }

        console.log('no user - create in db');

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
    });
};

//exporting so that available to all other classes
module.exports = {
    doSignUp: doSignUp
};
