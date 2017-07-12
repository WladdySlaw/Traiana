'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var concat = require('gulp-concat');

gulp.task('clean', function() {
    return gulp.src('src/css/*', {read: false})
        .pipe(clean());
});

gulp.task('concat-sass', function () {
    return gulp.src('src/styles/**/*.sass')
        .pipe(concat('_components.sass'))
        .pipe(gulp.dest('src/sass/'))
});

gulp.task('sass', function () {
    return gulp.src('src/sass/app.sass')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('src/css'))
});

gulp.task('watch', function() {
    gulp.watch('src/styles/**/*.sass', ['concat-sass']);
    gulp.watch('src/sass/*.sass', ['sass']);
});

gulp.task('default', ['clean', 'concat-sass', 'sass']);