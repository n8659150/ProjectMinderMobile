myApp
  
.controller('meetingDetailCtrl', function($scope,$rootScope,$state,CRUD,GeoAlert,$cordovaDialogs) {

	$scope.currentMeetingId = $state.params.meeting_id;
	console.log($scope.currentMeetingId);
  console.log($state.params);
	$scope.currentMeeting = $rootScope.meetingItems.$getRecord($scope.currentMeetingId);
  console.log($scope.currentMeeting);
	$scope.currentMeeting.startDate = $scope.currentMeeting.startDate.toString();
	// $scope.currentStudents = $scope.currentProject.students;
  $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Availability Check',
     template: 'The student is near GP S Block!'
   })};

	console.log($scope.currentMeeting);
	// console.log($scope.currentStudents);
	$scope.lat = -27.450850799999998; // QUT GP S block lat & long
  $scope.long = 153.015187;
  $scope.lat2 = -27.45085079999999;
  $scope.long2 = 153.01;



  $scope.avaCheck = function(user,locationArray){
    

    for (var i=0; i < locationArray.length; i++) {
      if (locationArray[i].email == user.p_email) {
            $scope.participantId = locationArray[i].$id;
            console.log(locationArray[i].firstname);
            console.log(locationArray[i].lastname);
            GeoAlert.begin(locationArray[i].lat,locationArray[i].long,$scope.lat, $scope.long, function() {
            // GeoAlert.begin($scope.lat2,$scope.long2,$scope.lat, $scope.long, function() {
            // GeoAlert.end();
            // navigator.notification.confirm(
            // 'You are near a target!',
            // onConfirm,
            // 'Target!',
            // ['Cancel','View']
            // );
            // $scope.showAlert();
            $cordovaDialogs.alert('The student is near QUT GP!', 'Availability Check', 'OK!')
            .then(function() {
              console.log('button pressed');
            });
        },function() {
            // GeoAlert.end();
            // navigator.notification.confirm(
            // 'You are near a target!',
            // onConfirm,
            // 'Target!',
            // ['Cancel','View']
            // );
            // $scope.showAlert();
            $cordovaDialogs.alert('The student is not available!', 'Availability Check', 'OK!')
            .then(function() {
              console.log('button2 pressed');
            });
        });

      }
    }

  };

})