myApp
  
.controller('myMeetingsCtrl', ['$scope','CRUD','$state','$location', '$rootScope','$ionicListDelegate','$cordovaGeolocation', function($scope,CRUD,$state,$location,$rootScope,$ionicListDelegate,$cordovaGeolocation){
	var ref = CRUD.meetingsInit();
	$rootScope.meetingItems = CRUD.setToArray2(ref);
	$scope.currentMeetingItem = {};
	$scope.newMeeting = {};
	$scope.newParticipants = [{name:'',num:'',email:''}];


    $scope.addMeeting = function() {
  	CRUD.addProject($rootScope.meetingItems,$scope.newMeeting,$scope.newParticipants);
    // $scope.alerts.type = 'success'
    // $scope.alerts.msg = 'Meeting record has been created successfully!'
      };

    $scope.goToMeetingEditPage = function(meetingId){
        console.log(meetingId);
        $location.path('success/meetingEdit/'+ meetingId);
        $ionicListDelegate.closeOptionButtons();
      };

    $scope.setSelectedMeetingItem = function(meetingId) {
  		var meetingRecord = $rootScope.meetingItems.$getRecord(meetingId);
  		console.log(meetingRecord);
  		CRUD.setSelectedMeetingItem(meetingRecord,$scope.currentMeetingItem);
  		console.log($scope.currentMeetingItem);
  	  };

      $scope.deleteMeetingItem = function(currentMeetingItem) {
	    var meetingRecord = $rootScope.meetingItems.$getRecord(currentMeetingItem.id);
      	$rootScope.meetingItems.$remove(meetingRecord);
        // $scope.alerts.type = 'danger'
        // $scope.alerts.msg = 'The meeting record has been successfully removed!'
        $ionicListDelegate.closeOptionButtons();
  	
  		};

      $scope.lengthCheck = function(obj){
        if (Object.keys(obj).length > 0) {
          
          console.log("length");
        } else {
          console.log("!length");
        } 
      }


}])