myApp
  
.controller('mapViewCtrl', function($scope,$rootScope,$state,CRUD,GeoAlert,$cordovaDialogs,$ionicPopup) {

	// $scope.currentStudents = $scope.currentProject.students;
  
  $scope.currentParticipant = $rootScope.locationItems.$getRecord($state.params.participant_id);
  console.log($scope.currentParticipant);
  var currentLat = $scope.currentParticipant.lat;
  var currentLong = $scope.currentParticipant.long;


  console.log(currentLat);
  console.log(currentLong);

  var GP = new google.maps.LatLng(-27.477039, 153.028393);
  
  var currentPosition = new google.maps.LatLng(currentLat,currentLong);

 
  var mapOptions = {
      center: GP,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    $scope.currentMapView = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

   var marker = new google.maps.Marker({
            position: currentPosition,
            map: $scope.currentMapView,
            animation: google.maps.Animation.DROP
        });

   var infoWindow = new google.maps.InfoWindow({
      content: $scope.currentParticipant.firstname +" 's lastest Position"
  });
 
  google.maps.event.addListener(marker, 'click', function () {
      infoWindow.open($scope.currentMapView, marker);
  });

})
