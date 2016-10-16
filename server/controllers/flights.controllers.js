var mongoose = require('mongoose');
var Flight = mongoose.model('Flight');
var Country = mongoose.model('Country');

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
				.json(response.message);
		});
}

module.exports.flightAdd = function(req, res) {

	console.log("POST new flight", flightId)
	Flight
		.create({
			name: req.body.name,
			location: [{type:mongoose.Schema.Types.ObjectId, ref: 'Country'}]
		}, function(err, flight) {
			if (err) {
				console.log("Error creating flight");
				res
					.status(400)
					.json(err);
			} else {
				console.log("Flight created!", flight);
				res
					.status(201)
					.json(flight);
			}
		})
};







