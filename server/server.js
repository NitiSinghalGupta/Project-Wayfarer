
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


app.get('/', controllers.landingPage.getLandingPage);
app.post('/signup', controllers.signup.doSignUp);
app.post('/signin', controllers.signin.doSignIn);
app.get('/home', controllers.homePage.getHomePage);
app.get('/profile', controllers.profilePage.getProfilePage);
app.get('/cities', controllers.getCities.getCitiesContainer);

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
