const plumber = require('gulp-plumber'),
	notify = require('gulp-notify'),
	nunjucksRender = require('gulp-nunjucks-render'),
	prettyHtml = require('gulp-pretty-html');

module.exports = function html() {
	return app.src(path.src.html)
		.pipe(plumber({
			errorHandler: notify.onError(function (err) {
				return {
					title: 'Error in HTML ' + err.plugin,
					sound: false,
					message: err.message
				}
			})
		}))
		.pipe(nunjucksRender({
			path: ['src/html/layouts/', 'src/html/includes/', 'src/html/mixins/'],
			ext: '.html',
		}))
		.pipe(prettyHtml())
		.pipe(app.dest(path.build.html))
};