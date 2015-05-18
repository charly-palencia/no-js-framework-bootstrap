var gulp = require('gulp');
var connect = require('gulp-connect');
var config = require('../../gulp-config');

gulp.task('connect', function () {
  connect.server({
    root: ['.', config.path],
    port: 9000,
    livereload: true
  })
});
