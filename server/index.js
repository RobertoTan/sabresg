var express = require('express');
var router = express.Router();
// var passport = require('passport');
// var jwt = require('express-jwt');
// var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

var mongoose = require('mongoose');
// var Post = mongoose.model('Post');
// var Comment = mongoose.model('Comment');
// var User = mongoose.model('User');

// Controllers
var ctrlSurvey = require('./controllers/survey.controllers.js');
var ctrlPois = require('./controllers/poi.controllers.js');
var ctrlCountries = require('./controllers/countries.controllers.js');
var ctrlTrips = require('./controllers/trips.controllers.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("hello");
});

// SURVEY ROUTES
router
  .route('/survey/:questionId')
  .get(ctrlSurvey.questionsGetPair);

// POINTS OF INTEREST ROUTES
router
  .route('/selectCountry/:countryId/:themeId')
  .get(ctrlPois.poiGetAll);

// COUNTRIES ROUTES
router
  .route('/showCountries')
  .get(ctrlCountries.countriesGetAll)

router
  .route('/selectCountry/:countryId')
  .get(ctrlCountries.countriesGetOne);

// TRIPS ROUTES
router
  .route('/trips')
  .get(ctrlTrips.pastTripsGetAll)
  .post(ctrlTrips.pastTripsAddOne);


module.exports = router;
