var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../../gulp-config');

gulp.task('styles', function () {
  return gulp.src('app/assets/styles/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest(config.release_path + '/styles/'));
});

