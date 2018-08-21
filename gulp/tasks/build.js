// Gulp tasks to Build a distribution of the site
var gulp = require("gulp");
var del = require('del');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var cssclean = require('gulp-clean-css');
var browsersync = require('browser-sync').create();

gulp.task('previewDist', function () {
	browsersync.init({
		notify: false,
		server : {
			baseDir: "docs"
		}
	});
});

gulp.task('deleteDistFolder', function () {
	return del("./docs");
});

gulp.task('copyGeneralFiles', gulp.series ('deleteDistFolder', function () {
	var pathsToCopy = [
		'./app/**/*',
		'!./app/assets/stylesheets',
		'!./app/assets/stylesheets/**',
		'!./app/assets/scripts/**',
		'!./app/*.html',
		'!./app/temp',
		'!./app/temp/**'
	]
	return gulp.src(pathsToCopy)
		.pipe(gulp.dest("./docs"));
}));

gulp.task('useminTrigger', gulp.series('deleteDistFolder', function () {
	gulp.usemin();
}));

gulp.task('usemin', gulp.series ('styles', 'scripts', function () {
	return gulp.src("./app/*.html")
		.pipe(usemin())
		.pipe(gulp.dest("./docs"));
}));

gulp.task('build', gulp.series('deleteDistFolder', 'copyGeneralFiles', 'usemin'));