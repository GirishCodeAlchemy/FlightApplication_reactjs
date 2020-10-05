/**
 * Default model settings
 * (sails.config.models)
 *
 * Your default, project-wide model settings. Can also be overridden on a
 * per-model basis by setting a top-level properties in the model definition.
 *
 * For details about all available model settings, see:
 * https://sailsjs.com/config/models
 *
 * For more general background on Sails model settings, and how to configure
 * them on a project-wide or per-model basis, see:
 * https://sailsjs.com/docs/concepts/models-and-orm/model-settings
 */

var dbMigrationStrategy = process.env.DB_MIGRATION || 'safe';

module.exports.models = {

  // Your app's default connection.
  // i.e. the name of one of your app's connections (see `config/connections.js`)
  //
  // (defaults to localDiskDb)
  datastore: 'flightDbConnection',
  migrate: dbMigrationStrategy,
  insertOrUpdate: async function (key, record, CB) {
    try {
      var self = this; // reference for use by callbacks
      var where = {};
      where[key] = record[key]; // keys differ by model
      await self.find(where, async function (err, found) {
        if (found && found.length) {
          try {
            await self.update(record[key], record, function (error, updated) {
              if (updated) {
                CB(false, updated);
              }
              else {
                CB(error, false);
              }
            });
          } catch (updateErr) { //returns if an error has occured, ie id doesn't exist.
            CB(updateErr, false);
          }
        } else {
          try {
            await self.create(record, function (createError, createResponse) {
              if (createResponse) {
                CB(false, createResponse);
              }
              else {
                CB(createError, false);
              }
            });
          } catch (createErr) { //returns if an error has occured, ie invoice_id doesn't exist.
            CB(createErr, false);
          }
        }
      }); //function findCB(err, found) {
      // did we find an existing record?
    } catch (insertUpdateErr) {
      CB(insertUpdateErr, false);
    }
  }
};
