angular.module('starter.services', [])
.factory('survey',function($http) {
    var o = {
        themes:["GAMBLING","BEACH","HISTORIC","ROMANTIC","SHOPPING","MOUNTAINS","NATIONAL-PARKS","OUTDOORS","THEME-PARK","SKIING"],
        maxfare:0,
        lengthofstay:0,
        trips:[]  
    };
    
    o.remove = function(test){
     for(var i=0; i < test.length;i++){
         var index = o.themes.indexOf(test[i]);
         if(index>-1){
             o.themes.splice(index,1);
         }
     }
    };
    
    o.reset = function(){
        themes=["GAMBLING","BEACH","HISTORIC","ROMANTIC","SHOPPING","MOUNTAINS","NATIONAL-PARKS","OUTDOORS","THEME-PARK","SKIING"];
        maxfare=0;
        lengthofstay=0;  
    }
    
    o.getTrips = function(){
        return $http({
            url: '/countries', 
            method: "GET",
            params: {
                origin: "SIN",
                lengthofstay:o.lengthofstay,
                theme: o.themes[0],
                maxFare: o.maxfare,               
                pointOfSaleCountry: "SG"
            }
        }).success(function(data){
           console.log(JSON.stringify(data));
           angular.copy(data,o.trips);
           console.log(o.trips);
        }).error(function(err){
           console.log(err);
        }
        );
    };
    
    return o;
})
