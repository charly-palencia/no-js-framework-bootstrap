var RoutesSuscriber = {
  init: function(){
    this.routes = [];
  },

  suscribe: function(routeCallback){
    this.routes.push(routeCallback);
  },

  publish: function(context){
    for (var index= 0; index < this.routes.length; index++) {
      this.routes[index].call(this, match);
    }
  }
};

exports.RoutesSuscriber = RoutesSuscriber

