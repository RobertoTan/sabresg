var mongoose = require('mongoose');
var poi = mongoose.model('Poi'); // imports the models

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




