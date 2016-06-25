var express = require('express');
var app = express();
var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];
var controllers = require('./controllers');
var auth = require('./config/auth');


require('./config/mongoose')(config);
require('./config/express')(app, config);


app.post('/login',auth.login);
app.post('/register',controllers.users.createUser);
app.get('/all',controllers.users.getAllUsers);


app.get('*',function (req,res) {
    res.render('index');
});


app.listen(config.port);
console.log('Server runnig on port 3000 ....');
