myApp
  
.controller('editProjectCtrl', function($scope,$rootScope,$state,CRUD) {


	$scope.currentPId = $state.params.p_id;
	$scope.currentProject = $rootScope.projectItems.$getRecord($scope.currentPId);
	$scope.currentProject.startDate = new Date($scope.currentProject.startDate);
	$scope.currentProject.endDate = new Date($scope.currentProject.endDate);

	$scope.saveItem = function(currentProject) {
	    var projectRecord = $rootScope.projectItems.$getRecord($scope.currentPId);
	    console.log(projectRecord);
      	CRUD.saveItem(projectRecord,currentProject,$rootScope.projectItems);
        // $scope.alerts.type = 'success';
        // $scope.alerts.msg = 'Project record has been updated successfully!';
  		
  		};


})