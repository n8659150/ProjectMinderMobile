myApp
  
.controller('addMeetingCtrl', function($scope,$rootScope,CRUD) {
	var currentUserFirstname = $rootScope.currentUser.firstname;
	var currentUserLastName = $rootScope.currentUser.lastname;
	$scope.combinedName = currentUserFirstname+" "+currentUserLastName;
	var email = $rootScope.currentUser.email;
	// $scope.roleCheck = function(role) {
	// 	if (role == 'student') {
	// 		$scope.newMeeting = {};
	// 		$scope.newParticipants = [{p_name:combined,p_num:'',p_email:email}];
	// 	} else if (role == 'admin') {
	// 		$scope.newMeeting = {};
	// 		$scope.newParticipants = [{p_name:'',p_num:'',p_email:''}];
	// 	}
	// }

	$scope.newMeeting = {};

	$scope.update = function(meeting){
		console.log(meeting);
		$scope.newMeeting.topic = meeting.name;
		$scope.newMeeting.unit = meeting.unit;
		$scope.newMeeting.supervisorFirstName = meeting.supervisorFirstName;
		$scope.newMeeting.supervisorLastName = meeting.supervisorLastName;
		$scope.newParticipants[0].p_name = meeting.students[0].name;
		$scope.newParticipants[0].p_num = meeting.students[0].num;
		$scope.newParticipants[0].p_email = meeting.students[0].email;

	}

	$scope.newParticipants = [{p_name:'',p_num:'',p_email:''}];

	$scope.alerts = 
	  [
	    { type: '', msg: '' }
	    
	  ];


	$scope.addMeeting = function(newMeeting,newParticipants) {
	  	CRUD.addMeeting($rootScope.meetingItems,newMeeting,newParticipants);
	    // $scope.alerts.type = 'success';
	    // $scope.alerts.msg = 'Meeting record has been created successfully!';
  	};




})