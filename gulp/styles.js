const gulpif = require('gulp-if'),
	plumber = require('gulp-plumber'),
	notify = require('gulp-notify'),
	sass = require('gulp-dart-sass'),
	cleanCSS = require('gulp-clean-css'),
	sourcemaps = require('gulp-sourcemaps'),
	groupMedia = require('gulp-group-css-media-queries'),
	autoprefixer = require('gulp-autoprefixer'),
	//webpCss          = require('gulp-webpcss'),
	rename = require("gulp-rename");

module.exports = function styles() {
	return app.src(path.src.scss)
		.pipe(plumber({
			errorHandler: notify.onError(function (err) {
				return {
					title: 'Error in SCSS plugin: ' + err.plugin,
					sound: false,
					message: err.message
				}
			})
		}))
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: "expanded",
			quietDeps: false,
		}))
		.pipe(groupMedia())
		.pipe(autoprefixer({
			overrideBrowserslist: ["last 10 versions"],
			cascade: true,
		}))
		.pipe(rename("style.css"))
		.pipe(gulpif(!app.isBuild, sourcemaps.write()))
		.pipe(gulpif(app.isBuild, app.dest(path.build.css)))
		.pipe(gulpif(
			app.isBuild,
			cleanCSS({
				level: { 1: { specialComments: 0 } },
				debug: true,
				compatibility: '*'
			}, details => {
				console.log(`${details.name}: 
						Original size:${details.stats.originalSize} - Minified size: 
						${details.stats.minifiedSize}`)
			})
		))
		.pipe(rename({ suffix: '.min' }))
		.pipe(app.dest(path.build.css))
}