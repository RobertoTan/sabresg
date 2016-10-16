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
var ctrlFlights = require('./controllers/flights.controllers.js');
var ctrlHotels = require('./controllers/hotels.controllers.js');
var ctrlPois = require('./controllers/poi.controllers.js');
var ctrlCountries = require('./controllers/countries.controllers.js');
var ctrlTrips = require('./controllers/trips.controllers.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send()
});

// SURVEY ROUTES
router
  .route('/survey/:questionId')
  .get(ctrlSurvey.questionsGetPair);

// FLIGHT ROUTES
router
  .route('/showFlights/:flightId') // only one
  .get(ctrlFlights.flightGet)
router
  .route('/intinerary/trip')
  .post(ctrlFlights.flightAdd);

// HOTEL ROUTES
router
  .route('/showHotels/:hotelId') // only one
  .get(ctrlHotels.hotelsGet)
router
  .route('/intinerary/trip')
  .post(ctrlHotels.hotelsAdd);

// POINTS OF INTEREST ROUTES
router
  .route('/selectCountry/:countryId/:themeId')
  .get(ctrlPois.poiGetAll);
router
  .route('/confirm/trip')
  .post(ctrlPois.poiAddAll);

// COUNTRIES ROUTES
router
  .route('/showCountries')
  .get(ctrlCountries.countriesGetAll);

router
  .route('/selectCountry/:countryId')
  .get(ctrlCountries.countriesGetOne);

// TRIPS ROUTES
router
  .route('/trips')
  .get(ctrlTrips.pastTripsGetAll)

router
  .route('/intinerary/trip')
  .post(ctrlTrips.pastTripsAddOne);



module.exports = router;
