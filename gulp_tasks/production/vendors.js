var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var gulpif = require('gulp-if');
var config = require('../../gulp-config');

gulp.task('vendors', function() {
  return gulp.src('app/vendors/**/*.js')
    .pipe(concat('vendors.js'))
    .pipe(gulpif(config.env == 'production', uglify()))
    .pipe(gulp.dest( config.path + '/scripts/'));
});
