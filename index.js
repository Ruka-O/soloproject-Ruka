const knex = require("knex");
require('dotenv').config();
const environment = process.env.NODE_ENV;
const knexConfig = require("./knexfile")[environment];

module.exports = knex(knexConfig);