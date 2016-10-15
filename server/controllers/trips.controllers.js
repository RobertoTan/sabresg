var mongoose = require('mongoose');
var trips = mongoose.model('Trips'); // imports the models

module.exports.pastTripsGetAll = function(req,res) {

	var offset = 0; // no .of trips to skip
	var count = 5; // no. of trips to show on page
	var maxCount = 5;

	if (req.query && req.query.offset)  {
		offset = parseInt(req.query.offset, 10);
	}

	if (req.query && req.query.count) {
		count = parseInt(req.query.count, 10);
	}

	if (isNaN(offset) || isNaN(count)) {
		res
			.status(400)
			.json({
				"message": "If supplied in querystring, count and offset should be integers!"
			})
		return;
	}

	Trips
		.find()
		.skip(offset)
		.limit(count)
		.exec(function(err, trips){
			if (err) {
				console.log("Error finding trips!");
				res
					.status(500)
					.json(err);
			} else {
				console.log("Found", trips.length, "trips!");
				res
					.json(trips)
			}
		}); 
};

module.exports.pastTripsAddOne = function(req, res) {

	Trips
		.create(req.body, function(err, trip) {
			if (err) {
				console.log("Error creating trip!");
				res
					.status(400)
					.json(err);
			} else {
				console.log("Trip created:", trip)
				res
					.status(200)
					.json(hotel);
			}
		});
};


















