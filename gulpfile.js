var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function () {
    return browserify('./public/scripts/app.js')
        .bundle()
        .on('error', function (e) {
            console.log(e);
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./public/'));
});

gulp.task('default', [
    'browserify'
]);