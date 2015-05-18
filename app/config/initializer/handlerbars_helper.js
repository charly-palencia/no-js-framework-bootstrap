Handlebars.registerHelper("urlTo", function(name, id){
  var params = [name]
  if(id.hash["id"]){
    params.push(id.hash["id"]);
  }
  return App.router.generate.apply(App.router, params);
});
