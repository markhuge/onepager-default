# Abstract
If you're looking at this on github, the stuff below probably won't make much sense. Check me out [here](https://markhuge.github.io/onepager-default) instead.

This is the default theme for [onepager](http://github.com/markhuge/onepager)

Here's what it looks like when I render code blocks:

```js
var gulp = require('gulp'),
    $    = require('gulp-load-plugins')(),
    data = require('./data.json');

gulp.task('css', function () {
  gulp.src('sass/main.sass')
    .pipe($.sass())
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
  gulp.watch(['sass/**/.sass'], ['css']);
});

gulp.task('default',[ 'server', 'watch', 'css', 'html' ]);
```

Here's my various headings and styles:

# h1
## h2
### h3
#### h4
##### h5
###### h6

**bold text**

*italic text*

