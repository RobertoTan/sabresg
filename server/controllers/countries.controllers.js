var mongoose = require('mongoose');
var Country = mongoose.model('Country');

// SABRE API

var SabreDevStudio = require('sabre-dev-studio');
var sabre_dev_studio = new SabreDevStudio({
  client_id:     'V1:6cqvyh90cnm7ftvg:DEVCENTER:EXT',
  client_secret: '4wmBAP1l',
  uri:           'https://api.test.sabre.com'
});

module.exports.countriesGetAll = function(req, res, next) {
	
	sabre_dev_studio.get('/v2/shop/flights/fares?origin='+ 
    req.query.origin +'&lengthofstay=3%2C4%2C5&theme='+
    req.query.theme+'&maxfare='+
    req.query.maxFare+'&pointofsalecountry='+
    req.query.pointOfSaleCountry, {}, function(error, data) {
    if (error) {
      res.send(error);
    } else {
      var test = JSON.parse(data);
      res.send(test.FareInfo.slice(0,5));
    }
  });

};

module.exports.countriesGetOne = function(req, res) {

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






