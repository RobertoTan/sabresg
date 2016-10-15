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
var ctrlPastTrips = require('./controllers/trips.controllers.js');
var ctrlSurvey = require('./controllers/survey.controllers.js');
var ctrlPois = require('./controllers/poi.controllers.js');
var ctrlCountries = require('./controllers/countries.controllers.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// TRIPS ROUTES
router
  .route('trips/pastTrips')
  .get(ctrlTrips.pastTripsGetAll);

router
  .route('trips/confirm')
  .post(ctrlTrips.pastTripsAddOne)

// SURVEY ROUTES
router
  .route('/survey/:questionId')
  .get(ctrlSurvey.questionsGetPair);

// COUNTRIES ROUTES
router
  .route('/showCountries')
  .get(ctrlCountries.countriesGetAll)

router
  .route('/selectCountry/:countryId')
  .get(ctrlCountries.countriesGetOne);

// POINTS OF INTEREST ROUTES
router
  .route('/selectCountry/:countryId/:themeId')
  .get(ctrlPois.poiGetAll);


// // AUTHENTICATION

// router.post('/register', function(req, res, next){
//   if(!req.body.username||!req.body.password){
//     return res.status().json({message: 'Please fill out all fields'});
//   }
  
//   var user = new User();
  
//   user.username = req.body.username;
  
//   user.setPassword(req.body.password);
  
//   user.save(function(err){
//     if(err){ return next(err); }
    
//     return res.json({token:user.generateJWT()});
//   })
  
// });

// router.post('/login',function(req, res, next){
//   if(!req.body.username || !req.body.password){
//     return res.status(400).json({message:'Please fill out all fields'});
//   }
  
//   passport.authenticate('local',function(err,user,info){
//     if(err){ return next(err); }
    
//     if(user){
//       return res.json({token: user.generateJWT()});;
//     }else{
//       return res.status(401).json(info);
//     }
//   })(req, res, next);
// });


module.exports = router;
