myApp
  
.controller('projectDetailCtrl', function($scope,$rootScope,$state,CRUD) {

	$scope.currentProjectId = $state.params.project_id;
	console.log($scope.currentProjectId);
	$scope.currentProject = $rootScope.projectItems.$getRecord($scope.currentProjectId);
	$scope.currentProject.startDate = $scope.currentProject.startDate.toString();
	$scope.currentProject.endDate = $scope.currentProject.endDate.toString();

	// $scope.currentStudents = $scope.currentProject.students;
	console.log($scope.currentProject);
	// console.log($scope.currentStudents);
})