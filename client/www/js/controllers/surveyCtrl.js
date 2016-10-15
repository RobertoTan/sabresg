angular.module('starter.controllers', [])

.controller('SurveyCtrl',function($scope,$state,$stateParams,survey){
  $scope.done = function(test){
    survey.remove(test);
    var stateName = $state.current.name;
    var currentNum = (parseInt(stateName.slice(-1))+1);
    if(currentNum<5){ 
      $state.go("app.survey-"+currentNum);
    } else{
      $state.go("app.home");
      alert(survey.themes);
    }
  }
})