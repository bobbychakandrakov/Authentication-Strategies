var express = require('express');
var app = express();
var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];
require('./config/mongoose')(config);
require('./config/express')(app, config);

app.get('*',function (req,res) {
    res.render('index');
});


app.listen(config.port);
console.log('Server runnig on port 3000 ....');
