var app = require('cantina')
  , controller = app.controller();

module.exports = controller;

controller.get('/', function (req, res, next) {
  res.render('home', {
    site_title: app.conf.get('title'),
    title: 'Home',
    body: 'Welcome to the homepage'
  });
});

controller.get('/about', function (req, res, next) {
  res.render('home', {
    site_title: app.conf.get('title'),
    title: 'About',
    body: 'About Us'
  });
});