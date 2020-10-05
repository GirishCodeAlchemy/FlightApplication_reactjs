/**
 * Flight.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'flightDbConnection',
  autoPk: false,
  schema: true,
  attributes: {
    id: {
      type: "number",
      // primaryKey: true,
      autoIncrement: true
    },
    source_city: {
      type: 'string',
      required: true,
    },
    destination_city: {
      type: 'string',
      required: true
    },
    flight_no: {
      type: 'string',
      required: true
    },
    airline_name: {
      type: 'string',
      required: true,
    },
    departure_date: {
      type: 'ref',
      columnType: 'datetime',
      required: true
    },
    arival_date: {
      type: 'ref',
      columnType: 'datetime',
      required: true
    },
    duration: {
      type: 'number',
      required: false,
    },
    no_of_stops: {
      type: "number",
      required: true,
    },
    price: {
      type: "number",
      required: true
    }
  },
};


