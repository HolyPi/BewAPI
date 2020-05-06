// Require Libraries
const bodyParser = require('body-parser');
const express = require('express');
const ideas = require('./controllers/ideas')
const Idea = require('./models/ideas')
require('./db/idea-db')
const router = express.Router();





// App Setup
const app = express();
app.use(router);

// Middleware
const exphbs  = require('express-handlebars');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Routes

// Start Server
// ideas/random 
// ideas/games

module.exports = app;
