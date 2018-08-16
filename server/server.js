
const express = require('express');


const app = express();


app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

const database = require('./models');

const controllers = require('./controllers');

app.get('/', function homepage(request, response) {
  response.sendFile('views/index.html', { root: __dirname });
});


app.post('/api/signup', controllers.signup.doSignUp);
app.post('/api/signin', controllers.signin.doSignIn);
app.post('/api/stocks', controllers.stocks.doAddStock);
app.post('/api/site', controllers.site.doAddSite);
app.post('/api/sunsign', controllers.sunsign.setUserSunsign);
app.post('/api/todo', controllers.todo.doAddTodo);
app.delete('/api/stocks', controllers.stocks.doDeleteStock);
app.delete('/api/site', controllers.site.doDeleteSite);
app.delete('/api/todo', controllers.todo.doDeleteTodo);

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
