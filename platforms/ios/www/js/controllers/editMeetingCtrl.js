myApp
  
.controller('editMeetingCtrl', function($scope,$rootScope,$state,CRUD) {


	$scope.currentMId = $state.params.m_id;
	$scope.currentMeeting = $rootScope.meetingItems.$getRecord($scope.currentMId);
	console.log($scope.currentMeeting);


	$scope.saveItem = function(currentMeeting) {

	    var meetingRecord = $rootScope.meetingItems.$getRecord($scope.currentMId);
	    console.log(meetingRecord);
      	CRUD.saveMeetingItem(meetingRecord,currentMeeting,$rootScope.meetingItems);
	    // $scope.alerts.type = 'success';
	    // $scope.alerts.msg = 'Meeting record has been updated successfully!';
        
  		};


})