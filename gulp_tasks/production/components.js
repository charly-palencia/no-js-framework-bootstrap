var gulp = require('gulp');
var es6transpiler = require('gulp-es6-transpiler');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var config = require('../../gulp-config');

gulp.task('components', function () {
  return gulp.src('app/components/**/*.js')
  .pipe(es6transpiler({
    disallowUnknownReferences: false
  }))
  .pipe(concat('components.js'))
  .pipe(uglify())
  .pipe(gulp.dest(config.path + '/scripts/'));
});
