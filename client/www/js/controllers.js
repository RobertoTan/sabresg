angular.module('starter.controllers', ['starter.services'])
.controller('HomeCtrl', function($scope,survey){
  $scope.reset = function(){
    survey.reset();
  }
})

.controller('CartCtrl', function($scope,$state,trip){
  
  $scope.lengthofstay = trip.lengthofstay;
  
  $scope.done = function(){
    $state.go('app.itinerary');
  }
  
  $scope.reset = function(){
    survey.reset();
  }
})

.controller('ItineraryCtrl', function($scope,survey){
  $scope.reset = function(){
    survey.reset();
  }
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('../templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('SurveyCtrl',function($scope,$state,$stateParams,$ionicPopup,survey){
  
  $scope.formData = {};
  $scope.formData.lengthofstay = 5;
  
  $scope.done = function(test){
    survey.remove(test);
    var stateName = $state.current.name;
    var currentNum = (parseInt(stateName.slice(-1))+1);
    if(currentNum<6){
      $state.go("app.survey-"+currentNum);
    } else{
      $state.go("app.home");
    }
  }
  
  $scope.submitInfo = function(){
    if(!$scope.formData.budget){
   var alertPopup = $ionicPopup.alert({
     title: 'Enter an appropriate budget',
     });

   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
    }else{
      survey.maxfare = parseInt($scope.formData.budget);
      survey.lengthofstay = parseInt($scope.formData.lengthofstay);
      
      // survey.getTrips();
      
      $state.go("app.country");
    }
  }
  
})

.controller('CountryCtrl',function($scope,$state,survey,tripsPromise){
  
  $scope.trips = survey.trips;
  
  $scope.done = function(){
    $state.go('app.cart');
  }
  

})

.controller('HomeController',function($scope,survey){
  $scope.reset = function(){
    survey.reset();
  }
})



.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
});
// >>>>>>> origin/master:client/www/js/controllers.js
