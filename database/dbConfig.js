const knex = require('knex');
const knexConfig = require('../knexfile');

module.epxorts = knex(knexConfig.development);