module.exports = function favicon () {
	return app.src(path.src.favicon)
		.pipe(app.dest(path.build.favicon));
}