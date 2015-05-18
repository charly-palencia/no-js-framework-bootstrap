var gulp = require('gulp');
var preprocess = require('gulp-preprocess');
var config = require('../../gulp-config');
var plumber = require('gulp-plumber');

gulp.task('html', function () {
  return gulp.src('app/*.html')
  .pipe(plumber())
  .pipe(preprocess({context: { NODE_ENV: config.env }}))
  .pipe(gulp.dest(config.release_path));
});
