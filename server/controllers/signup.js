// code for empty check
const repeatedcode = require('../repeatedcode');

//add db
const database = require('../model');

var HTTP_SERVER_ERROR = 500;

//this for sending email 
const nodemailer = require('nodemailer');

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
        console.log('Email passed to Nodeserver:', json.email );    

        sendEmailtoUser(json.email);
            console.log('new user created as: ', newUser);
            response.json(newUser);

            
        });
    });
};

/*
Function to send an email to User upon successfull signup
npm install nodemailer --save
*/
function sendEmailtoUser(email) {
// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'y7souccgolggb43i@ethereal.email', // generated ethereal user
            pass: '7QxGheNfWGAWcBNjq7' // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Wayfarer Project 👻" <gupta.sweet.niti@gmail.com>', // sender address
        to: email , // list of receivers
        subject: 'Wayfarer Project Testing ✔', // Subject line
        text: 'Hey there, Welcome to the best travelling site!!', // plain text body
        html: '<b>Project Wayfarer testing </b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    });
});
}

//exporting so that available to all other classes
module.exports = {
    doSignUp: doSignUp
};
