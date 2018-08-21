//connecting db
const mongoose = require('mongoose');

//adding models
const database = require('../model');

const repeatedcode = require('../repeatedcode');

var badHttpRequestCode = 400;

function doAddPost(request, response) {
    let city = request.body.city;
    let title = request.body.title;
    let text = request.body.text;
    
    let email = request.body.email;

    //empty check
    if (repeatedcode.isEmpty(email)) {
        console.log("email empty");
        response.status(badHttpRequestCode).send('User email is required');
        return;
    }

    if (repeatedcode.isEmpty(city)) {
        console.log("cityname empty");
        response.status(badHttpRequestCode).send('City is required');
        return;
    }

    if (repeatedcode.isEmpty(title)) {
        console.log("title");
        response.status(badHttpRequestCode).send('title is required');
        return;
    }

    if (repeatedcode.isEmpty(text)) {
        console.log("text");
        response.status(badHttpRequestCode).send('text is required');
        return;
    }
 
    let json = {
        city: city,
        title: title,
        text: text,
        email: email
    };

    // create new user
    database.Posts.create(json, function (error, newPost) {
        if (error) {
            console.log('error creating new user');

            // db error
            response.status(500).send('insert user into database failed');
            return;
        }

        console.log('new user created as: ', newPost);
        response.json(newPost);
    });
}

function doDeletePost(request, response) {
    const id = request.params.id;    
    const email = request.query.email;

    database.Posts.deleteOne({ _id : id }, function(error, deletedPost) {
        if (error) {
            console.log('error creating new user');

            // db error
            response.status(500).send('insert user into database failed');
            return;
        }

        response.json(deletedPost);
    });
}

function doEditPost(request, response) {
    const id = request.params.id;    
    const email = request.body.email;
    const title = request.body.title;
    const text = request.body.text;

    console.log('post id: ' + id);
    console.log('user email: ' + email);
    console.log('text: ' + text);
    console.log('title: ' + title);
 
    // create new user
    database.Posts.findOne({ _id : id }, function (error, findPost) {
        if (error) {
            console.log('error creating new user');

            // db error
            response.status(500).send('insert user into database failed');
            return;
        }

        // check if the user editing the post is the same as the user
        // who created this post
        console.log('user email: ' + email + ' with post email: ' + findPost.email);
        if(findPost.email != email) {
            console.log('different user editing this post');
            response.status(401).send('unauthorized user editing post');
            return;
        }

        // we created settings at user signup
        findPost.title = title;
        findPost.text = text;
        findPost.updated = Date.now();

        // save in the database
        findPost.save(function (error2, saved) {
            if (error2) {
                response.status(500).send("something failed");
                return;
            }

            response.json(saved);
        });  
    });
}

function getPostForCity(request, response) {
    let city = request.params.city;

    //empty check
    if (repeatedcode.isEmpty(city)) {
        console.log("city empty");
        response.status(badHttpRequestCode).send('city is required');
        return;
    }

    // find user in database
    database.Posts.find({ city: city}, null, { sort : { updated : -1 } }, function (error, results) {
        if (error) {
            console.log('error finding posts for city');
            response.status(badHttpRequestCode).send("something went wrong");
            return;
        }

        response.json(results);
    });
}

function getPostForUser(request, response) {
    let email = request.query.email;

    //empty check
    if (repeatedcode.isEmpty(email)) {
        console.log("email empty");
        response.status(badHttpRequestCode).send('email is required');
        return;
    }

    // find user in database
    database.Posts.find({ email: email}, null, { sort : { updated : -1 } }, function (error, results) {
        if (error) {
            console.log('error finding posts for user');
            response.status(badHttpRequestCode).send("something went wrong");
            return;
        }

        response.json(results);
    });
}

// exporting signin for other files
module.exports = {
    doAddPost : doAddPost,
    doEditPost : doEditPost,
    getPostForCity : getPostForCity,
    getPostForUser : getPostForUser,
    doDeletePost : doDeletePost
};
