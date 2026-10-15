const server = require('browser-sync').create();

const html = require('./html'),
	styles = require('./styles'),
	scripts = require('./scripts'),
	images = require('./images'),
	sprite = require('./sprite');

function readyReload(cb) {
	server.reload();
	cb();
}

module.exports = function serve(cb) {
	server.init({
		server: { 
			baseDir: path.buildFolder
		},
		port: 3000,
		notify: false,
		online: true,
		open: true,
		cors: true
	});

	app.watch(path.watch.img, app.series(images, readyReload));
	app.watch(path.watch.spriteSvg, app.series(sprite.svgSprite, readyReload));
	app.watch(path.watch.spritePng, app.series(sprite.pngSprite, readyReload));
	app.watch(path.watch.scss, app.series(styles, cb => app.src(path.build.css).pipe(server.stream()).on('end', cb)));
	app.watch(path.watch.js, app.series(scripts, readyReload));
	app.watch(path.watch.html, app.series(html, readyReload));

	return cb();
}