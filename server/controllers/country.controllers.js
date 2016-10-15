var mongoose = require('mongoose');
var Country = mongoose.model('Country');

module.exports.showCountries = function(req, res) {
	
	Country
		.find()
		.exec(function(err, countries) {
			if (err) {
				console.log("Error finding countries.");
				res
					.status(500)
					.json(err);
			} else {
				console.log("Found countries", countries.length);
				res
					.json(countries)
			}
		});

};

module.exports.selectCountry = function(req, res) {

	var countryId = req.params.countryId;
	console.log("GET countryId", countryId);

	Country
		.findById(countryId)
		.exec(function(err, doc) {
			var response = {
				status: 200,
				message: doc
			}
			if (err) {
				console.log("Error finding country");
				response.status = 500;
				response.message = err;
			} else if (!doc) {
				response.status = 404;
				response.message = {
					"message": "Country ID not found!"
				};
			}	
			res
				.status(response.status)
				.json(response.message)
		})
};






