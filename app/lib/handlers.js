App.handlers = {};

App.router.getHandler = function(name) {
  return App.handlers[name];
};

App.router.updateURL = function(url) {
  window.location.hash = url;
};


