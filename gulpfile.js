var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer'); //https://github.com/postcss/autoprefixer#options
var minify = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var nodemon = require('gulp-nodemon');

// Server start
gulp.task('default', function () {
  gulp.watch(['reform/*'], ['styles']);
});

// Style compilation and minification
gulp.task('styles', function() {
  return gulp.src([
      'reform/*'
    ])
    .pipe(sourcemaps.init()) // Init sourcemaps
    .pipe(sass().on('error', sass.logError)) // Parse Sass
    .pipe(concat('reform.min.css'))
    .pipe(autoprefixer({ // Add necessary vendor prefixes
      browsers: ['last 2 versions'],
      remove: false // Don't strip old prefixes
    }))
    .pipe(sourcemaps.write('/')) // Output sourcemaps
    .pipe(gulp.dest('dist/')); // Output file
});