// Require Libraries
const bodyParser = require('body-parser');
const express = require('express');
require('./models/ideas.js')
require('./db/idea-db')






// App Setup
const app = express();


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


require('./controllers/ideas.js')(app)
app.listen(3000, () => {
    console.log('listening')
})


module.exports = app;