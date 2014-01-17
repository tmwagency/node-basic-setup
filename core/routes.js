
/*!
 * Module dependencies.
 */

var async = require('async')


/**
 * Expose routes
 */

module.exports = function (app) {

	app.get('/', function(req, res) {
        res.render('index', { title : 'Welcome to the test page!' });
	});

}
