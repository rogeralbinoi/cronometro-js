'use strict';
const gulp = require('gulp'),
      webpack = require('gulp-webpack'),
      rename = require('gulp-rename');

gulp.task('default', () => {
    gulp.watch(['./js/dev/**/*.js'],['js']);
});


gulp.task('js', () => {
	return gulp.src('./js/dev/**/*.js')
               .pipe(webpack(require('./webpack.config.js')))
               .pipe(gulp.dest('./'));
});

gulp.task('js:watch', ()=> {
	gulp.watch(['./js/dev/**/*.js'],['js']);
});