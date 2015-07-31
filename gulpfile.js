var gulp       = require('gulp'),
    path       = require('path'),
    reactify   = require('reactify'),
    browserify = require('gulp-browserify'),
    notify     = require('gulp-notify'),
    plumber    = require('gulp-plumber');


var paths = {
  src: path.join(__dirname, 'src/**/*.js'),
  static: path.join(__dirname, 'static/**'),
  build: path.join(__dirname, 'build'),
  dest: path.join(__dirname, 'build/js'),
  srcRoot: path.join(__dirname, 'src')
};


gulp.task('static', function () {
  gulp.src(paths.static)
    .pipe(gulp.dest(paths.build))
    .pipe(notify({
      message: 'Static complete!',
      onLast: true
    }));
});


gulp.task('scripts', function () {
  gulp.src(paths.src)
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


gulp.task('build', ['scripts', 'static']);


gulp.task('watch', ['build'], function () {
  gulp.watch(paths.src, ['scripts']);
});


gulp.task('default', ['watch']);
