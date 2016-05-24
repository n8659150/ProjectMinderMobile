myApp.factory('GeoAlert', function() {
   console.log('GeoAlert service instantiated');
   var interval;
   var duration = 6000000000000;
   var long, lat;
   var processing = false;
   var callback;
   var callback2;
   var minDistance = 1;
    
   // Credit: http://stackoverflow.com/a/27943/52160   
   function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
   }
  
   function deg2rad(deg) {
    return deg * (Math.PI/180)
   }
   
   // function hb() {
   //    console.log('hb running');
   //    if(processing) return;
   //    processing = true;
   //    navigator.geolocation.getCurrentPosition(function(position) {
   //      processing = false;
   //      console.log(lat, long);
   //      console.log(position.coords.latitude, position.coords.longitude);
        
   //    });
   // }
   
   return {
     begin:function(lt,lg,GPlt,GPlg,cb,cb2) {
       long = lg;
       lat = lt;
       callback = cb;
       callback2 = cb2;
       var dist = getDistanceFromLatLonInKm(lat, long, GPlt, GPlg);
        console.log("dist in km is "+dist);
        if(dist <= minDistance) {callback()} else {callback2()};

       // interval = window.setInterval(hb, duration);
     }, 
     // end: function() {
     //   window.clearInterval(interval);
     // },
     setTarget: function(lg,lt) {
       long = lg;
       lat = lt;
     }
   };
   
})
