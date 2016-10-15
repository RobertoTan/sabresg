var mongoose = require('mongoose')

var countrySchema = new mongoose.schema({
	name: {
		type: String,
		required: true
	},
	currency: String,
	"location": {
		address: String,
		coordinated: {
			type: [Number],
			index: '2dsphere'
		}
	},
	themes: [String]
});

mongoose.model("Country", countrySchema, 'coutries');