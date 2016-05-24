myApp
  
.controller('addProjectCtrl', function($scope,$rootScope,CRUD) {
	var currentUserFirstname = $rootScope.currentUser.firstname;
	var currentUserLastName = $rootScope.currentUser.lastname;
	$scope.roleCheck = function(role) {
		if (role == 'admin') {
			$scope.newProject = {}
		}
	}

	$scope.newProject = {supervisorFirstName:currentUserFirstname, 
						 supervisorLastName:currentUserLastName};
	console.log($scope.newProject.supervisorFirstName);

	$scope.newStudents = [{name:'',num:'',email:''}];

	$scope.alerts = 
	  [
	    { type: '', msg: '' }
	    
	  ];

	$scope.addProject = function(newProject,newStudents) {
	  	CRUD.addProject($rootScope.projectItems,newProject,newStudents);
	    // $scope.alerts.type = 'success';
	    // $scope.alerts.msg = 'Project record has been created successfully!';
  	};


	
})