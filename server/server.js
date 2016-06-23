var express = require('express');
var app = express();
var port = process.env.PORT || 3000;


app.get('/',function (req,res) {
    res.send('Home page!');
});


app.listen(port);
console.log('Server runnig on port 3000 ....');
