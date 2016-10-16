// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
      }
    }
  })

  .state('app.trips', {
    url: '/trips',
    views: {
      'menuContent': {
        templateUrl: 'templates/trips.html',
       
      }
    }
  })

  .state('app.help', {
    url: '/help',
    views: {
      'menuContent': {
        templateUrl: 'templates/help.html',
      }
    }
  })

  .state('app.account', {
    url: '/account',
    views: {
      'menuContent': {
        templateUrl: 'templates/account.html',
      }
    }
  })

  .state('app.survey-1', {
    url: '/survey/1',
    views: {
      'menuContent': {
        templateUrl: 'templates/survey/survey1.html',
        controller: 'SurveyCtrl'
      }
    }
  })
  .state('app.survey-2', {
    url: '/survey/2',
    views: {
      'menuContent': {
        templateUrl: 'templates/survey/survey2.html',
        controller: 'SurveyCtrl'
      }
    }
  })
  .state('app.survey-3', {
    url: '/survey/3',
    views: {
      'menuContent': {
        templateUrl: 'templates/survey/survey3.html',
        controller: 'SurveyCtrl'
      }
    }
  })
  .state('app.survey-4', {
    url: '/survey/4',
    views: {
      'menuContent': {
        templateUrl: 'templates/survey/survey4.html',
        controller: 'SurveyCtrl'
      }
    }
  })
  .state('app.survey-5', {
    url: '/survey/5',
    views: {
      'menuContent': {
        templateUrl: 'templates/survey/survey5.html',
        controller: 'SurveyCtrl'
      }
    }
  })

  .state('app.cart', {
    url: '/cart',
    views: {
      'menuContent': {
        templateUrl: 'templates/cart.html',
      }
    }
  })

  .state('app.itinerary', {
    url: '/itinerary',
    views: {
      'menuContent': {
        templateUrl: 'templates/itinerary.html',
      }
    }
  })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
