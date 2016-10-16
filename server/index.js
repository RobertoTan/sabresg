var express = require('express');
var router = express.Router();
// var passport = require('passport');
// var jwt = require('express-jwt');
// var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

var mongoose = require('mongoose');
// var Post = mongoose.model('Post');
// var Comment = mongoose.model('Comment');
// var User = mongoose.model('User');

var SabreDevStudio = require('sabre-dev-studio');

// Controllers
var ctrlSurvey = require('./controllers/survey.controllers.js');
var ctrlFlights = require('./controllers/flights.controllers.js');
var ctrlHotels = require('./controllers/hotels.controllers.js');
var ctrlPois = require('./controllers/poi.controllers.js');
var ctrlCountries = require('./controllers/countries.controllers.js');
var ctrlTrips = require('./controllers/trips.controllers.js');


var sabre_dev_studio = new SabreDevStudio({
  client_id:     'V1:6cqvyh90cnm7ftvg:DEVCENTER:EXT',
  client_secret: '4wmBAP1l',
  uri:           'https://api.test.sabre.com'
});

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
  .route('/confirm/trip')
  .post(ctrlFlights.flightAdd);

// HOTEL ROUTES
router
  .route('/showHotels/:hotelId') // only one
  .get(ctrlHotels.hotelsGet)
router
  .route('/confirm/trip')
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
  .route('/confirm/trip')
  .post(ctrlTrips.pastTripsAddOne);
  
router.get('/hello',function (req, res, next) {
  sabre_dev_studio.get('/v2/shop/flights/fares?origin='+ 
    req.query.origin +'&lengthofstay=3%2C4%2C5&theme='+
    req.query.theme+'&maxfare='+
    req.query.maxFare+'&pointofsalecountry='+
    req.query.pointOfSaleCountry, {}, function(error, data) {
    if (error) {
      res.send(error);
    } else {
      var test = JSON.parse(data);
      res.send(test.FareInfo.slice(0,5));
    }
  });
});


module.exports = router;
