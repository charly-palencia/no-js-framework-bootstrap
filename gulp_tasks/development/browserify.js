var gulp = require('gulp');
var rename = require("gulp-rename");
var browserify = require('browserify');
var config = require('../../gulp-config');
var concat = require('gulp-concat');
var es6ify = require('es6ify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');

var errLog = function (err) {
  if (err) {
    gutil.log(err.toString());
  }
};

es6ify.traceurOverrides = { asyncFunctions: true };
gulp.task('es6runtime', function(){
  return gulp.src(es6ify.runtime)
  .pipe(gulp.dest(config.path + '/scripts/'));
});

gulp.task('browserify', ['es6runtime'], function(){
  browserify({
    entries: ['app/main.js'],
    transform: ['es6ify'],
  })
  .bundle()
  .on('error', gutil.log.bind(gutil, 'Browserify Error'))
  .pipe(source('build.js'))
  .pipe(gulp.dest(config.path + '/scripts'));

});
