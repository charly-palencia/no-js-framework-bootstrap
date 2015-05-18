class RoutesSuscriber {
  constructor(){
    this.routes = [];
  }

  suscribe(routeCallback){
    this.routes.push(routeCallback);
  }

  publish(match){
    for (var index= 0; index < this.routes.length; index++) {
      this.routes[index].call(this, match);
    }
  }
}

exports.RoutesSuscriber = RoutesSuscriber
