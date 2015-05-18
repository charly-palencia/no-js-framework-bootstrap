var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('../../gulp-config');

gulp.task('vendors', function() {
  return gulp.src('app/vendors/**/*.js')
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest( config.path + '/scripts/'));
});
