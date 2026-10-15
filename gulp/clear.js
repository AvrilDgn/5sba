const del = require('del');

module.exports = function clearDist() {
	return del(path.buildFolder);
}