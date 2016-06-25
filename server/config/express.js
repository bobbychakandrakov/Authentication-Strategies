var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    passport = require('passport');

module.exports = function(app, config) {
    app.set('view engine', 'ejs');
    app.set('views', config.rootPath + '../views');
    app.use(cookieParser());
    app.use(bodyParser());
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static(config.rootPath + '/public'));
};
