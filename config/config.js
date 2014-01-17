
var path = require('path'),
	rootPath = path.normalize(__dirname + '/..'),
	config,
	sharedConfig;

var sharedConfig = {
	app: {
		name: 'Node Basic Setup'
	},
	root: rootPath,
	db : {
		path: {}
	}
};

config = {
	local: {
		mode:	'local',
		port:	3001,
		url:	'',
		global:	sharedConfig
	},

	development: {
		mode:	'dev',
		port:	3001,
		global:	sharedConfig
	},

	staging: {
		mode:	'staging',
		port:	3001,
		global:	sharedConfig
	},

	production: {
		mode:	'prod',
		port:	3001,
		global:	sharedConfig
	},

	hosts: [
		{
			domain: 'basic-setup.local',
			target: ['localhost:3001']
		}
	]
};


// Export config
module.exports = config;