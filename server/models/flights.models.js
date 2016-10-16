var mongoose = require('mongoose');

var flightSchema = new mongoose.Schema({
	OriginLocation: {
		type: String,
		required: true
	},
	LowestFare: {
		AirlineCodes: [String],
		Fare: Number
	},
	DestinationLocation: String,
	CurrencyCode: String,
	photos: [String]
});

mongoose.model('Flight', flightSchema);