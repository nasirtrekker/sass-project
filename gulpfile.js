var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('default', function(){
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch("index.html").on('change', browserSync.reload);
	gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('sass', function(){
	gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(browserSync.stream())
    .pipe(gulp.dest('dist'));
});