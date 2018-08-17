//api code for stock
const repeatedcode = require('../repeatedcode');

var HTTPBADCODE = 500;

//adding models
const database = require('../models');

function doAddTodo(request, response) {
    let todo = request.body.todo;
    let email = request.body.email;

    console.log('add todo for: ' + todo);

    // see if the todo is present or not
    if (repeatedcode.isEmpty(todo)) {
        response.status(400).send('todo is required');
        return;
    }

    // get user settings
    database.Settings.findOne({ email: email }, function (error, settings) {
        if (error) {
            console.log('did not find user');
            response.status(500).send("something failed");
            return;
        }

        console.log('read settings as:', settings);

        // we created settings at user signup
        if (!settings.todos) {
            settings.todos = [];
        }

        settings.todos.push({ text: todo });

        // save in the database
        settings.save(function (error3, saved) {
            if (error3) {
                response.status(500).send("something failed");
                return;
            }

            response.json(saved);
        });
    });
}

function doDeleteTodo(request, response){
    let todoID   = request.body.todoID;
    let email  = request.body.email;

    console.log('remove todo for: ' + todoID);

    if (repeatedcode.isEmpty(todoID)) {
        response.status(400).send("todoID is empty");
        return;
    }

    database.Settings.findOne({ 'email': email }, function (error, settings) {
        if (error) {
            console.log('did not find user');
            response.status(HTTPBADCODE).send("something failed");
            return;
        }

        console.log(settings);

        // check if there are any todos in database
        if (!settings.todos) {
            console.log('delete todo: no todo added');
            response.json(settings);
            return;
        }

        // ran a google search for
        // "mongoose remove subdocument"
        // removing sub-docs
        // sections of http://mongoosejs.com/docs/subdocs.html
        settings.todos.pull(todoID);
        console.log(settings);

        // save in the database
        settings.save(function (error3, saved) {
            if (error3) {
                response.status(HTTPBADCODE).send("something failed");
                return;
            }

            console.log('updated settings', saved);
            response.json(saved);
        });
    });
}


module.exports = {
    doAddTodo: doAddTodo,
    doDeleteTodo : doDeleteTodo
};
