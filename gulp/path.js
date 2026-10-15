const buildFolder = "./build";
const srcFolder = "./src";

module.exports = {
	build: {
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		img: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		favicon: `${buildFolder}/favicon/`,
	},
	src: {
		html: `${srcFolder}/html/pages/*.html`,
		scss: `${srcFolder}/scss/main.scss`,
		js: `${srcFolder}/js/**/*.js`,
		img: [`${srcFolder}/img/**/*.{jpg,jpeg,png,webp,svg,gif}`, `!${srcFolder}/img/sprite/**/*.*`],
		spriteSvg: `${srcFolder}/img/sprite/**/*.svg`,
		spritePng: `${srcFolder}/img/sprite/**/*.png`,
		fonts: `${srcFolder}/fonts/`,
		scssFontfaces: `${srcFolder}/scss/base/_fontfaces.scss`,
		scssFontVars: `${srcFolder}/scss/helpers/_fonts.scss`,
		scssPngSprite: `${srcFolder}/scss/helpers/`,
		favicon: `${srcFolder}/favicon/**/*.*`,
	},
	watch: {
		html: `${srcFolder}/html/**/*.html`,
		css: `${srcFolder}/css/**/*.css`,
		scss: `${srcFolder}/scss/**/*.scss`,
		js: `${srcFolder}/js/**/*.js`,
		img: [`${srcFolder}/img/**/*.{jpg,jpeg,png,webp,svg,gif}`, `!${srcFolder}/img/sprite/**/*.*`],
		spriteSvg: `${srcFolder}/img/sprite/**/*.svg`,
		spritePng: `${srcFolder}/img/sprite/**/*.png`,
	},
	clean: buildFolder,
	srcFolder,
	buildFolder,
}