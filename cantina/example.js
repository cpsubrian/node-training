var app = require('cantina')
 ,  path = require('path');

app.load(function (err) {
  if (err) return console.error(err);

  require(app.plugins.http);
  require(app.plugins.middleware);
  require('./plugins/logger');
  require(app.plugins.static);
  require(app.plugins.controllers);
  require('cantina-views');

  app.views.registerPartials(path.resolve(app.root, 'views/partials'));

  app.init();
});