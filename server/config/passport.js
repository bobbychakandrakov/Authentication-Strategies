var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User');

module.exports = function() {
    passport.use(new LocalStrategy(
      function(username, password, done) {
        User.findOne({ username: username }, function (err, user) {
              if (err) {
                  return done(err);
              }
              if (!user) {
                  return done(null, false);
              }
              if (!user.authenticate(password)) {
                  return done(null, false);
              }
              return done(null, user);
        });
      }
    ));
    passport.serializeUser(function(user, done) {
        if (user) {
            return done(null, user._id);
        }
    });

    passport.deserializeUser(function(id, done) {
      User.findById(id, function (err, user) {
        done(err, user);
      });
    });

};
