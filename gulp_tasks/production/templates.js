var gulp = require('gulp');
var handlebars = require('gulp-handlebars');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var config = require('../../gulp-config');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var path = require('path');
var wrap = require('gulp-wrap');

gulp.task('templates', function(){
  var partials = gulp.src(['app/layouts/**/_*.html', 'app/components/**/_*.html'])
    .pipe(plumber())
    .pipe(handlebars())
    .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
      imports: {
        processPartialName: function(fileName) {
          return JSON.stringify(path.basename(fileName, '.js').substr(1));
        }
      }
    }))

  var templates = gulp.src(['app/components/**/[^_]*.html', 'app/layouts/**/[^_]*.html'])
    .pipe(plumber())
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'App.templates',
      noRedeclare: true, // Avoid duplicate declarations
    }))

  return merge(partials, templates)
    .pipe(concat('templates.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.path + '/scripts/'));
});
