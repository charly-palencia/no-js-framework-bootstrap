var gulp = require('gulp');
var rename = require("gulp-rename");
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var config = require('../../gulp-config');
var concat = require('gulp-concat');
var es6ify = require('es6ify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');

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
  .pipe(source('build.js'))
  .pipe(streamify(uglify()))
  .pipe(gulp.dest(config.path + '/scripts'));
});
