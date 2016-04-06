var bluebird = require('bluebird');
var rimraf   = require('rimraf');

module.exports = bluebird.promisify(rimraf);
