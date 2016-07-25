'use strict';

var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('serve', function() {
    gulp.src('dev')
        .pipe(server({
            livereload: true,
            open: true
        }));
})

gulp.task('default', ['serve']);
