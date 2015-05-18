var RoutesSuscriber = require('../lib/routes_suscriber').RoutesSuscriber;
App.routes = new RoutesSuscriber();
App.dataEnpoint = "http://localhost:3000/api/v1";
require('../lib/handlers');

$(function(){

  App.router.map(function(match){
    App.routes.publish(match);
  });

  require('./initializer/handlerbars_helper');

  $(window).hashchange( function(){
    var url = location.hash.replace( /^#/, '' )
    App.router.handleURL(url);
  })

  $(window).hashchange();
});

