// const request = require( '../utils/promise.js' );

var promise = require('bluebird');
var request = promise.promisifyAll(require("request"));


exports.get = function(id, cb) {
  request.get({
	    url: 'http://api.wallstcn.com/hatano/v1/discussions?limit=20&api_key=7ejud0cL',
	}, function (err, res) {
	    cb(err,res)
	})
}