const { src, dest, watch, parallel, series } = require('gulp');

global.app = {
	src, dest, watch, parallel, series,
	isBuild: process.argv.includes('--production'),
};

const taskFolder = "./gulp";

const path = require(taskFolder + '/path');
global.path = path;

const html = require(taskFolder + '/html'),
	styles = require(taskFolder + '/styles'),
	scripts = require(taskFolder + '/scripts'),
	fonts = require(taskFolder + '/fonts'),
	images = require(taskFolder + '/images'),
	sprite = require(taskFolder + '/sprite'),
	clear = require(taskFolder + '/clear'),
	serve = require(taskFolder + '/serve'),
	favicon = require(taskFolder + '/favicon');

const dev = series(
	images,
	series(
		fonts.otfToTtf,
		fonts.ttfToWoff,
		fonts.fontsToScss
	),
	parallel(
		html,
		scripts,
		styles,
		sprite.svgSprite,
		sprite.pngSprite,
		favicon
	)
);

function start(cb) {
	if (!app.isBuild) {
		return series(clear, dev, serve);
	} else {
		return series(clear, dev);
	}
}

module.exports.default = start();