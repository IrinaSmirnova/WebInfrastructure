var gulp = require('gulp');
var concat = require('gulp-concat');
var jasmine = require('gulp-jasmine');
 
gulp.task('scripts', function() {
  return gulp.src(['./bower_components/bootstrap/js/*.js'])
    .pipe(concat('dist.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('tests', function () {
    return gulp.src('spec/test.js')
        .pipe(jasmine());
});
gulp.task('default', ['scripts', 'tests']);