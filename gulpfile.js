var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watch = require('gulp-watch');
var gutil = require('gulp-util');
var exec = require('child_process').exec;

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

gulp.task('watch', function () {

    var watcher = gulp.watch('./public/scripts/**/*.js', ['browserify']);
    watcher.on('change', function (event) {
        gutil.log('Script changes detected...');
    });

});

gulp.task('serve', ['browserify', 'watch'], function () {

    exec('node server.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });
});