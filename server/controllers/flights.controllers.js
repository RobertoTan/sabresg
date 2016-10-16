var mongoose = require('mongoose');
var Flight = require.model('Flight');

module.exports.flightGet = function(req, res) {
	var id = req.params.flightId
	console.log('GET flightId', id);

	Flight
		.findById(id)
		.exec(function(err, flight) {
			var response = {
				status: 200,
				message: flight
			};
			if (err) {
				console.log("Error finding flight");
				response.status = 500;
				response.message = err;
			} else if (!flight) {
				console.log("FlightId cannot be found in DB", id);
				response.status = 404;
				response.message = {
					"message" : "Flight ID not found " + id
				};
			}
			res
				.status(response.status)
				.json(response.message)
		});
}