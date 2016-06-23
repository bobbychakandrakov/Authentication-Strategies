var express = require('express');
var app = express();
var port = process.env.PORT || 3000;


app.set('views', __dirname + '/views');
app.set('view engine','ejs');


app.get('*',function (req,res) {
    res.render('index');
});


app.listen(port);
console.log('Server runnig on port 3000 ....');
