var mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({
	question: String,
	option1: String,
	option2: String,
	photos: [String]
});

mongoose.model("Survey", surveySchema, 'survey'); 
// name of model, name of schema, mongodb collection