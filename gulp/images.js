const gulpif = require('gulp-if'),
	plumber = require('gulp-plumber'),
	notify = require('gulp-notify'),
	imagemin = require('gulp-imagemin'),
	// webp = require('imagemin-webp'),
	webp = require('gulp-webp'),
	newer = require('gulp-newer');

module.exports = function images(cb) {
	app.src(path.src.img)
		.pipe(plumber({
			errorHandler: notify.onError(function (err) {
				return {
					title: 'Images plugin: ' + err.plugin,
					sound: false,
					message: 'Error: <%= error.message %>'
				}
			})
		}))
		.pipe(newer(path.build.img))
		.pipe(gulpif(!app.isBuild, app.dest(path.build.img)))
		.pipe(webp())
		.pipe(app.dest(path.build.img))
		.pipe(gulpif(app.isBuild, app.src(path.src.img)))
		.pipe(gulpif(
			app.isBuild,
			imagemin({
				progressive: true,
				svgoPlugins: [{ removeViewBox: false }],
				interlaced: true,
				optimizationLevel: 3
			})
		))
		.pipe(gulpif(app.isBuild, app.dest(path.build.img)))
	cb();
}