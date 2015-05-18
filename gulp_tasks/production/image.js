var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var config = require('../../gulp-config');

gulp.task('images', function() {
  return gulp.src('app/assets/images/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest(config.release_path + '/img'));
});
