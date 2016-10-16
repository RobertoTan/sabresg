var mongoose = require('mongoose');
var Poi = mongoose.model('Poi'); // imports the models

module.exports.poiGetAll = function(req, res) {

	var countryId = req.params.countryId;
	var themeId = req.params.themeId;
	console.log("GET themeId", themeId, "for countryId", countryId)

	Poi
		.findById(countryId)
		.exec(function(err, country) {
			console.log("Returned country: ", country);
			var pois = country.themes.id(themeId);
			res
				.status(200)
				.json(pois);
		});
};

module.exports.poiAddAll = function(req, res) {

	Poi
		.create({
			name: req.body.name,
			activities: [String]
		}, function(err, poi) {
			if (err) {
				console.log("Error creating POI");
				res
					.status(400)
					.json(err);
			} else {
				console.log("POI created!", poi);
				res
					.status(201)
					.json(poi);
			}
		});

}




