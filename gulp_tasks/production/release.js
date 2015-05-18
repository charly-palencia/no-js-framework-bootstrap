var gulp = require('gulp');
var plumber = require('gulp-plumber');
var es6ify = require('es6ify');
var es6ify = require('es6ify');
var concat = require('gulp-concat');
var config = require('../../gulp-config');
var merge = require('merge-stream');
var del = require('del');

gulp.task('remove-dist', function () {
    del([
      'dist/**/*',
      '.tmp/**/*'
    ], cb);
});

gulp.task('remove-dist', function () {
  return gulp.src('.tmp/scripts/traceur-runtime.js')
  .pipe(gulp.dest(config.release_path));
});

gulp.task('release', ['remove-dist'], function(){
  var dir = ".tmp/scripts";
  return gulp.src([ dir + '/vendors.js', dir + '/build.js', dir + '/components.js', dir + '/templates.js' ])
  .pipe(plumber())
  .pipe(concat('application.js'))
  .pipe(gulp.dest(config.release_path));
});
