require('dotenv').config();
module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: process.env.POSTGRES_USER || 'user',
      database: process.env.POSTGRES_DB || 'mymvp'
    },
    migrations: {
			directory: './src/db/data/migrations',
		},
		seeds: { directory: './src/db/data/seeds' }
  },

  production: {
    client: 'pg',
    connection: {
    },
    migrations: {
			directory: './src/db/data/migrations',
		},
		seeds: { directory: './src/db/data/seeds' },
  }

};
