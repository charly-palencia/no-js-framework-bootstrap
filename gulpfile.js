var path = require('path');
var gulp = require('gulp-help')(require('gulp'));
var requireDir = require('require-dir');
var gutil = require('gulp-util');
var connect = require('gulp-connect');
var config = require('./gulp-config');

requireDir('./gulp_tasks/' + config.env);

/*****************************/
/*       Error Logs           */
/*****************************/

gutil.log(gutil.colors.black.bgYellow("Starting Server"));
gutil.log(gutil.colors.yellow.bgBlue("Environment " + config.env ));

var errLog = function (err) {
  if (err) {
    gutil.log(err.toString());
  }
};

/*****************************/
/*       Task list           */
/*****************************/
var tasks = {
  styles:  ['app/assets/styles/**/*.css'],
  templates:  ['app/components/**/*.html', 'app/layouts/**/[^_]*.html'],
  components: ['app/components/**/*.js'],
  vendors: ['app/vendors/**/*.js'],
  browserify: ['app/**/*.js'],
  images: ['app/assets/images/**/*'],
  html: ['app/**/*.html']
};

gulp.task('default', config.dependencies, function () {
  var reload_files = [];

  /****************************/
  /* Watch diferents tasks    */
  /***************************/
  for(name in tasks){
    reload_files = reload_files.concat(tasks[name]);

    gulp.start(name);

    if(config.env !== 'production' ){
      gulp.watch(tasks[name], [name]);
    }
  }


  if(config.env === 'production' ){
    gulp.start('release');
  }else{
    /**********************************/
    /* Watch for change in app folder */
    /****************************^*****/
    gulp.watch(reload_files, function(event) {
      return gulp.src(event.path).pipe(connect.reload());
    });
  }
});
