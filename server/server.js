
const express = require('express');


const app = express();


app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({}));

app.use(express.static('public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

const database = require('./model');
  
const controllers = require('./controllers');

app.get('/', function homepage(request, response) {
  response.sendFile('views/index.html', { root: __dirname });
  response.json({ message: 'You did it Niti! you have your server up and running, Good job!' })
});


app.post('/signup', controllers.signup.doSignUp);
app.post('/signin', controllers.signin.doSignIn);
app.post('/profile',controllers.profile.getProfile)

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
