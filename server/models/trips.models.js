var mongoose = require('mongoose');
var hotelSchema = mongoose.model('hotelSchema');
var poiSchema = mongoose.model('poiSchema');

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

var tripSchema = new mongoose.Schema({
	flight: [flightSchema],
	hotel: [hotelSchema],
	placesOfInterest: [poiSchema],
	days: Number,
	costLeft: Number,
	createdOn: {
		type: Date,
		"default": Date.now
	}
});

mongoose.model("Trips", tripSchema, 'trips');
// name of model, name of schema, mongodb collection