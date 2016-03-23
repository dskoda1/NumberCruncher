const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');
const webpack = require('webpack-stream');
const eslint = require('gulp-eslint');

gulp.task('lintClient', () => {
  return gulp.src(['client/**', '!node_modules/**'])
    .pipe(eslint(require('./.eslintrc.json')))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
gulp.task('lintShared', () => {
  return gulp.src(['shared/**', '!node_modules/**'])
    .pipe(eslint(require('./.eslintrc.json')))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('webpackClient', () => {
  return gulp.src('client/index.jsx')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('public/'));
});

gulp.task('client', () => {
  gulp.watch('client/**',
    ['lintClient',
    'webpackClient']);
});

gulp.task('runTests', () => {
  return gulp.src('test/*', {read: true})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watchForTests', () => {
  gulp.watch([
    './controllers/**',
    './test/**'
    ],
    ['runTests']);
});

gulp.task('es6-watch', () => {
  gulp.watch([
    './shared/es6DataStructures/**',
    './test/es6-DS-tests/**']
  , ['es6-lint', 'es6-test']);
});

gulp.task('es6-lint', () => {
  return gulp.src('./shared/es6DataStructures/**')
    .pipe(eslint(require('./.eslintrc.json')))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('es6-test', () => {
    return gulp.src('./test/es6-DS-tests/SinglyLinkedList-spec.js', {read: true})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('default', ['es6-watch']);