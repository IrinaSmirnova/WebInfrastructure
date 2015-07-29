var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleancss = new LessPluginCleanCSS({ advanced: true });

gulp.task('jscs', function () {
    return gulp.src('all.js')
        .pipe(jscs())
});

gulp.task('jshint', function () {
    return gulp.src('all.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('scripts', function() {
  return gulp.src(['./bower_components/bootstrap/js/*.js', 'all.js'])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});

gulp.task('tests', function () {
    return gulp.src('spec/test.js')
        .pipe(jasmine());
});

gulp.task('css', function () {
    return gulp.src(['./bower_components/bootstrap/less/bootstrap.less','all.less'])
        .pipe(less({
            plugins: [cleancss]
        }))
        .pipe(concat('all.css'))
        .pipe(gulp.dest('public/css'));
});

gulp.task('default', ['jscs','jshint','scripts', 'css','tests']);