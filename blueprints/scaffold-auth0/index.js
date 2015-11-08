var EmberRouterGenerator = require('ember-router-generator'),
    path                 = require('path'),
    fs                   = require('fs-extra');

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function(options) {
   addRoutesToRouter({
      root: options.project.root,
      path: options.path
    });
  }
};

function addRoutesToRouter(options) {
  addRouteToRouter('login', options);
  addRouteToRouter('protected', options);
};

function addRouteToRouter (route, options) {
  var routerPath = path.join(options.root, 'app', 'router.js');
  var source = fs.readFileSync(routerPath, 'utf-8');
  var routes = new EmberRouterGenerator(source);
  var newRoute = routes.add(route, options);

  fs.writeFileSync(routerPath, newRoute.code());
}
