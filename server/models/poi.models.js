var mongoose = require('mongoose');

var poiSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	rating: {
		type: Number,
		min: 0,
		max: 5,
		"default": 0
	},
	description: String,
	photos: [String],
	"location": {
		address: String,
		coordinates: { // Longitude, Latitude
			type: [Number], 
			index: '2dsphere'
		}
	}
});

mongoose.model('Poi', poiSchema); 
// name of model, name of schema, mongodb collection