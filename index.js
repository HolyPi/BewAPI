// Require Libraries
require('dotenv').config()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const express = require('express');
require('./models/ideas.js')
require('./db/idea-db')

let checkAuth = (req, res, next) => {
    console.log("Checking authentication")
    if (typeof req.cookies.api_token === "undefined" || req.cookies.api_token === null) {
        req.user = null
    } else {
        let token = req.cookies.api_token
        let decodedToken = jwt.decode(token, { complete: true }) || {}
        console.log(decodedToken)
        req.user = decodedToken.payload
    }

    next()
}





// App Setup
const app = express();


// Middleware
const exphbs  = require('express-handlebars');
app.use(bodyParser.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Routes

// Start Server
// ideas/random 
// ideas/games

app.use(checkAuth)
require('./controllers/ideas.js')(app)
require('./controllers/auth.js')(app)
app.listen(3000, () => {
    console.log('listening')
})


module.exports = app;