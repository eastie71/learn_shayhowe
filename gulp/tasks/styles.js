var gulp = require('gulp');
// The postcss plugin does not do much out of the box - you still need other plugins added to it as well
var postcss = require('gulp-postcss');

// Ability to rename files
var rename = require('gulp-rename');

// autoprofixer used to handle vendor prefixes for browsers - eg. webkit-.... 
var autoprefixer = require('autoprefixer');

// simple-vars allows you to use variables in CSS eg. $mainBlueColor: #232355;
var cssvars = require('postcss-simple-vars');

// nested allows you to write nested CSS 
var nestedcss = require('postcss-nested');

// css-import allows you to make use of import statements to include multiple css files to build
// one large file for the final web site
var cssimport = require('postcss-import');

// allow color function
var csscolor = require('postcss-color-function');

// mixins package allows you create reusable bits of code (CSS)
// See "_mixins.css" file
var mixins = require('postcss-mixins');
var hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {
	// postcss expects an array of plugins
	return gulp.src('./app/assets/stylesheets/styles.css')
			.pipe(postcss([cssimport, mixins, cssvars, nestedcss, hexrgba, autoprefixer, csscolor]))
			.on('error', function (errorInfo) {
				// Log some info on the error that occurred. (so you can debug problems in your css)
				console.log(errorInfo.toString());
				// this is if the postcss task receives an error, then this allows the gulp task to continue (without bombing out)
				this.emit('end');
			})
			.pipe(rename('main.css'))
			.pipe(gulp.dest('./app/temp/stylesheets'));
});