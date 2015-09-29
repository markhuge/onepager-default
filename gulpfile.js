var gulp = require('gulp'),
    $    = require('gulp-load-plugins')(),
    data = require('./data.json');

var bourbon   = require('node-bourbon').includePaths,
    neat      = require('node-neat').includePaths,
    sassPaths = bourbon.concat(neat);

gulp.task('css', function () {
  gulp.src('sass/main.sass')
    .pipe($.sass({
      includePaths: sassPaths
    }))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe($.csscomb())
    .pipe(gulp.dest('dist/css'))
    .pipe($.connect.reload());
});

gulp.task('html', function() {
  gulp.src('jade/*.jade')
    .pipe($.jade({ locals: data }))
    .pipe(gulp.dest('./dist'))
    .pipe($.connect.reload());
    });

gulp.task('server', function () {
  $.connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch(['jade/*.jade'], ['html']);
  gulp.watch(['sass/**/*.sass'], ['css']);
});

gulp.task('default',[ 'server', 'watch', 'css', 'html' ]);
