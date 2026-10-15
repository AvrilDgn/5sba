const rename = require('gulp-rename'),
	plumber = require('gulp-plumber'),
	notify = require('gulp-notify'),
	svgstore = require('gulp-svgstore'),
	// svgSprite = require('gulp-svg-sprite'),
	spritesmith = require('gulp.spritesmith'),
	merge = require('merge-stream');

module.exports.svgSprite = function svgSprite() {
	return app.src(path.src.spriteSvg)
		.pipe(plumber({
			errorHandler: notify.onError(function (err) {
				return {
					title: 'Svg sprite plugin: ' + err.plugin,
					sound: false,
					message: 'Error: <%= error.message %>'
				}
			})
		}))
		.pipe(svgstore({
			inlineSvg: true
		}))
		.pipe(rename('sprite.svg'))
		.pipe(app.dest(path.build.img))
}

module.exports.pngSprite = function pngSprite() {
	// Generate our spritesheet
	let spriteData = app.src(path.src.spritePng)
		.pipe(plumber({
			errorHandler: notify.onError(function (err) {
				return {
					title: 'Png sprite plugin: ' + err.plugin,
					sound: false,
					message: 'Error: <%= error.message %>'
				}
			})
		}))
		.pipe(spritesmith({
			imgName: 'sprite.png',
			imgPath: '../img/sprite/sprite.png',
			cssName: '_sprite.scss',
			padding: 5
		}));

	// Pipe image stream onto disk
	let imgStream = spriteData.img
		.pipe(app.dest(path.build.img));

	// Pipe CSS stream onto disk
	let cssStream = spriteData.css
		.pipe(app.dest(path.src.scssPngSprite));

	// Return a merged stream to handle both `end` events
	return merge(imgStream, cssStream);
}