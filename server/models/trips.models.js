var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel');
var Poi = mongoose.model('Poi');

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

var tripSchema = new mongoose.Schema({
	flight: [{type:mongoose.Schema.Types.ObjectId, ref: 'Flight'}],
	hotel: [{type:mongoose.Schema.Types.ObjectId, ref: 'Hotel'}],
	placesOfInterest: [{type:mongoose.Schema.Types.ObjectId, ref:'Poi'}],
	days: Number,
	costLeft: Number,
	createdOn: {
		type: Date,
		"default": Date.now
	}
});

mongoose.model('Trips', tripSchema);
// name of model, name of schema, mongodb collection