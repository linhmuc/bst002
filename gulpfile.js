'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build', function () {
    return gulp.src('style.scss')
        .pipe(sass())
        .pipe(gulp.dest('dest'));
});
gulp.task('watch',function () {
    gulp.watch('style.scss',[ 'build']);
});
gulp.task('default', ['build', 'watch']);
