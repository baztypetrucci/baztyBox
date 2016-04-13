var gulp = require('gulp');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', function() {
	return gulp.src('lib/*.js')
	.pipe(watch('lib/*.js'))
	.pipe(gulp.dest('dist'))
	.pipe(uglify({mangle:true,compress:true}))
	.pipe(rename({
		suffix:'.min',
		extname:'.js'
	}))
	.pipe(gulp.dest('dist'));
});

gulp.task('callback', function (cb) {
	watch('lib/*.js', function () {
		gulp.src('lib/*.js')
		.pipe(watch('lib/*.js'))
		.on('end', cb);
	});
});
