angular.module('starter.services', [])
.factory('survey',function() {
    var o = {
        themes:["GAMBLING","BEACH","HISTORIC","ROMANTIC","SHOPPING","MOUNTAINS","NATIONAL-PARKS","OUTDOORS","THEME-PARK","SKIING"]
    };
    
    o.remove = function(test){
     for(var i=0; i < test.length;i++){
         var index = o.themes.indexOf(test[i]);
         if(index>-1){
             o.themes.splice(index,1);
         }
     }
    };
    
    return o;
})
