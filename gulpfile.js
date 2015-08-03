"use strict";

var gulp       = require('gulp'),
    path       = require('path'),
    reactify   = require('reactify'),
    browserify = require('gulp-browserify'),
    notify     = require('gulp-notify'),
    sass       = require('gulp-ruby-sass') ,
    bower      = require('gulp-bower'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber    = require('gulp-plumber');


var paths = {
  src: path.join(__dirname, 'src'),
  scss: path.join(__dirname, 'scss'),
  static: path.join(__dirname, 'static'),
  build: path.join(__dirname, 'build'),
  dest: path.join(__dirname, 'build/js'),
  srcRoot: path.join(__dirname, 'src'),
  bower: path.join(__dirname, 'bower_components' )
};

gulp.task('bower', function () { 
  bower()
     .pipe(gulp.dest(paths.bower)) ;
});


gulp.task('css', function () { 
  sass(path.join(paths.scss, 'style.scss'), {
        loadPath: [
          paths.scss,
          path.join(paths.bower, 'bootstrap-sass-official/assets/stylesheets'),
          path.join(paths.bower, 'fontawesome/scss'),
        ]
    })
    .on('error', notify.onError('Error: <%= error.message %>'))
     .pipe(gulp.dest(paths.build))
    .pipe(notify({
      message: 'Stylesheets complete!',
      onLast: true
    })); 
});


gulp.task('static', function () {
  gulp.src(path.join(paths.static, '**'))
    .pipe(gulp.dest(paths.build))
    .pipe(notify({
      message: 'Static complete!',
      onLast: true
    }));
});


gulp.task('scripts', function () {
  gulp.src(path.join(paths.src, 'app.js'))
    .pipe(browserify({
      transform: [reactify],
      debug: true,
      cache: {}, packageCache: {}, fullPaths: true
    }))
    .on('error', notify.onError('Error: <%= error.message %>'))
    .pipe(gulp.dest(paths.dest))
    .pipe(notify({
      message: 'Scripts complete!',
      onLast: true
    }));
});


gulp.task('build', ['scripts', 'css', 'static']);


gulp.task('watch:static', function () {
  gulp.watch(path.join(paths.static, '**'), ['static']);
});


gulp.task('watch:scripts', function () {
  gulp.watch(path.join(paths.src, '**'), ['scripts']);
});


gulp.task('watch:css', function () {
  gulp.watch(path.join(paths.scss, '/**/*.scss'), ['css']); 
});


gulp.task('watch', ['build', 'watch:static', 'watch:scripts', 'watch:css']);


gulp.task('default', ['watch']);
