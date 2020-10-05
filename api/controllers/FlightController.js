/**
 * FlightController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function (req, res) {
        try {
            sails.log.info("Create flight for request:" + JSON.stringify(req.body));
            data = req.body

            await Flight.create(req.body).then(function (records) {
                console.log("inserted " + records)
                return res.status(200).json({
                    "message": "Inserted Successfully",
                    "status": 200
                });
            }).catch(function (error) {
                return res.status(400).json({
                    "message": "Error Occurred",
                    "errorDetails": error,
                    "status": 400
                });
            });
        } catch (error) {
            return res.serverError(error);
        }
    },

    find: async function (req, res) {
        try {
            var query = {};
            response = await Flight.find(query);
            return res.status(200).json({
                "message": response,
                "status": 200
            });

        } catch (err) {
            sails.log.error("Error in searching Flight details", JSON.stringify(err));
            return res.serverError("Unable to retrieve Flight record(s), Error details : " + err);
        }
    },

};

