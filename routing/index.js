var express = require('express');
var passport = require('passport');
var User = require('../api/data/user.model');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/index', function(req, res) {
    res.render('index');
});

router.get('/apps', function(req, res) {
    res.render('apps');
});

router.get('/article', function(req, res) {
    res.render('article');
});

router.get('/login', function(req, res) {
    res.render('login');
});

router.post('/login', passport.authenticate('local'), function(req, res) {
   res.redirect('/'); 
});

router.post('/androidLogin', passport.authenticate('local'), function(req, res) {
    if(err) {
        res.json({Code: 500});
    }

    res.json({Code: 200});
});

router.get('/signup', function(req, res) {
    res.render('signup');
});

router.post('/signup', function(req, res) {
    User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
        if (err) {
            return res.render('signup', { error : err.message });
        }

        passport.authenticate('local')(req, res, function () {
            req.session.save(function (err) {
                if (err) {
                    return next(err);
                }
            });
            res.redirect('/');
        });
    });
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
