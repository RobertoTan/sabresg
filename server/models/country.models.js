var mongoose = require('mongoose');

var countrySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	currency: String,
	"location": {
		address: String,
		coordinates: {
			type: [Number],
			index: '2dsphere'
		}
	},
	themes: [String]
});

mongoose.model('Country', countrySchema);