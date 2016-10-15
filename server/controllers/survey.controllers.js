var mongoose = require('mongoose');
var Survey = mongoose.model('Survey'); // imports the models

module.exports.questionsGetPair = function(req, res) {

	var questionId = req.params.questionId;
	console.log("GET questionId", questionId);

	Survey
		.findById(surveyId)
		.exec(function(err, question) {
			var response = {
				status: 200,
				message: question
			}
			if (err) {
				console.log("Error finding question");
				response.status = 500;
				response.message = err;
			} else if (!doc) {
				response.status = 404;
				response.message = {
					"message": "Question ID not found"
				};
			}
			res
				.status(response.status)
				.json(response.message);
		})
};









