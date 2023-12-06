const path = require('path');

module.exports = {
	development: {
		client: 'pg',
		connection: 'postgres://localhost/coolrain',
		useNullAsDefault: true,
		migrations: {
			directory: './db/migrations',
		},
		seeds: {
			directory: './db/seeds/dev',
		},
	},

	test: {
		client: 'pg',
		connection: process.env.DATABASE_URL || 'postgres://localhost/coolrain',
		useNullAsDefault: true,
		migrations: {
			directory: path.resolve(__dirname, './server/db/migrations'),
		},
		seeds: {
			directory: path.resolve(__dirname, './server/db/seeds/test'),
		},
	},

	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL + '$ssl=true',
		useNullAsDefault: true,
		migrations: {
			directory: './db/migrations',
		},
		seeds: {
			directory: './db/seeds/dev',
		},
	},
};