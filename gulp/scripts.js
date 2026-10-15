const plumber = require('gulp-plumber'),
	notify = require('gulp-notify'),
	concat = require('gulp-concat'),
	env = require('gulp-environments'),
	sourcemaps = require('gulp-sourcemaps'),
	terser = require('gulp-terser'),
	// webpack                  = require('webpack-stream'),
	// CircularDependencyPlugin = require('circular-dependency-plugin'),
	// { DuplicatesPlugin }     = require("inspectpack/plugin"),

	//eslint                   = require('gulp-eslint'),
	//fileInclude              = require('gulp-file-include'),
	rename = require('gulp-rename'),
	babel = require('gulp-babel'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify-es').default;

module.exports = function scripts() {
	// app.src([path.src.js, '!/**/main.js'])
	// 	.pipe(app.dest(path.build.js));

	// return src(path.src.js + "main.js")
	return app.src(path.src.js)
		.pipe(plumber({
			errorHandler: notify.onError(function (err) {
				return {
					title: 'Error in JS plugin: ' + err.plugin,
					sound: false,
					message: err.message
				}
			})
		}))
		.pipe(sourcemaps.init())
		.pipe(concat('main.js'))
		.pipe(gulpif(
			!app.isBuild, 
			env.development(
				sourcemaps.write()
			)
		))
		.pipe(gulpif(
			app.isBuild,
			babel({
				presets: ['@babel/env']
			})
		))
		.pipe(gulpif(
			app.isBuild,
			app.dest(path.build.js)
		))
		// .pipe(env.production(terser()))
		.pipe(rename("main.min.js"))
		.pipe(gulpif(
			app.isBuild,
			babel({
				presets: ['@babel/env']
			})
		))
		.pipe(gulpif(app.isBuild, uglify()))
		.pipe(app.dest(path.build.js));
}