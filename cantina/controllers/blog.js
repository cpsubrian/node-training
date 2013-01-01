var app = require('cantina')
  , controller = app.controller();

module.exports = controller;

controller.get('/blog/:id', function (req, res, next) {
  var blog = {
    1: {
      title: 'Yo YO YO',
      body: 'This post is the best'
    },
    2: {
      title: 'Wuzzip',
      body: 'Happy new year!'
    }
  };
  var post = blog[req.params.id];
  if (post) {
    res.render('blog', {
      site_title: app.conf.get('title'),
      title: post.title,
      body: post.body
    });
  }
  else {
    next();
  }
});