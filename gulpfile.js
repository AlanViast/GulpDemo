var gulp = require('gulp');
var minify = require('gulp-minify');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default',['compress'], function() {
  // place code for your default task here
  // });
});

gulp.task('hello', function(){
  console.log('Hell World');
});

gulp.task('compress', ['minify', 'minify-css'], function(){

});

gulp.task('minify', function(){
  gulp.src('src/js/**/*.js')
    .pipe(minify())   // 代码压缩
    .pipe(uglify())   // 代码混淆
    .pipe(gulp.dest("dist/js"));
});

gulp.task('minify-css', function() {
  return gulp.src('src/css/**/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('sass', function () {
  gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('sass:build', function () {
  gulp.src('src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('dist/css'));
});

var watcher = function(){
  gulp.watch('src/**/*.*', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
};

gulp.task('watch', ['compress'], watcher);