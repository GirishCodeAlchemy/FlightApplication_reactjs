/**
 * Datastores
 * (sails.config.datastores)
 *
 * A set of datastore configurations which tell Sails where to fetch or save
 * data when you execute built-in model methods like `.find()` and `.create()`.
 *
 *  > This file is mainly useful for configuring your development database,
 *  > as well as any additional one-off databases used by individual models.
 *  > Ready to go live?  Head towards `config/env/production.js`.
 *
 * For more information on configuring datastores, check out:
 * https://sailsjs.com/config/datastores
 */

module.exports.datastores = {


  flightDbConnection: {
    adapter: 'sails-disk'
  },

  // PostgreSQL is another officially supported relational database.
  // http://en.wikipedia.org/wiki/PostgreSQL
  //
  // Run:
  // npm install sails-postgresql
  //
  // flightDbConnection: {
  //   adapter: 'sails-postgresql',
  //   host: psqlDetails["url"],
  //   user: psqlDetails["user"],
  //   password: psqlDetails["password"],
  //   port: psqlDetails["port"],
  //   database: 'supportdb',
  //   hookTimeout: 120000,
  //   connectTimeout: 120000
  // }


};
