var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel');
var Poi = mongoose.model('Poi');
var Flight = mongoose.model('Flight');

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