var promise = require('bluebird');
var request = promise.promisifyAll(require("request"));
module.exports = {
    request: request
};