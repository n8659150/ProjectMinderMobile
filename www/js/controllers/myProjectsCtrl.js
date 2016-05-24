myApp

.controller('myProjectsCtrl', ['$scope','CRUD','$state','$location', '$rootScope','$ionicListDelegate','GeoAlert','$cordovaGeolocation',function($scope,CRUD,$state,$location,$rootScope,$ionicListDelegate,$GeoAlert,$cordovaGeolocation) {
	var ref = CRUD.projectsInit();
	$rootScope.projectItems = CRUD.setToArray(ref);
	$scope.currentProjectItem = {};
  $scope.newProject = {};
  $scope.emailform = {email:'',content:''};
  $scope.newStudents = [{name:'',num:'',email:''}];
  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  //userLocationArray init
  var ref2 = CRUD.locationsInit();
  $rootScope.locationItems = CRUD.setToArray(ref2);


   var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $scope.postUserLocation = function(userID){
        console.log("start");
        console.log($rootScope.locationItems);
        console.log(userID);
        var userLocationRecord = $rootScope.locationItems.$getRecord(userID);
        console.log("record is"+ userLocationRecord);
        //get currentUser position
        $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
        $rootScope.currentUser.lat = position.coords.latitude;
        $rootScope.currentUser.long = position.coords.longitude;
        console.log($rootScope.currentUser.lat);
        console.log($rootScope.currentUser.long);
        console.log("UpdateLocation start");
        CRUD.updateLocation($rootScope.currentUser,userLocationRecord,$rootScope.locationItems);
        console.log("end");
      }, function(err) {
        $cordovaDialogs.alert('Please enable your location service', 'Notification', 'OK!')
              .then(function() {
                console.log('button pressed');
              });
        // error
      });
      }


  $scope.$on('$ionicView.enter', function () {
    $scope.postUserLocation($rootScope.currentUser.$id);
    });


      $scope.goToEditPage = function(projectId){
        console.log(projectId);
        $location.path('success/edit/'+ projectId);
        $ionicListDelegate.closeOptionButtons();
        
      }

      $scope.sendMail = function(mailto,subject){
     	 var link = "mailto:"+ mailto
             		+ "?subject=" + escape(subject)
             		+ "&body=" + escape(document.getElementById('emailcontent').value);
	    console.log(link);
	    window.location.href = link;
 		  }

      $scope.setEmailAddress = function(originPlace,newPlace) {
     	newPlace.email = originPlace.email;
     	newPlace.name = originPlace.name;
     	}

 	  $scope.addStudent = function(){
 		 CRUD.addOneStudentSet($scope.newStudents);
 		 }

      $scope.addProject = function() {
      	CRUD.addProject($rootScope.projectItems,$scope.newProject,$scope.newStudents);
        $scope.alerts.type = 'success'
        $scope.alerts.msg = 'Project record has been created successfully!'
      };

      $scope.clearForm = function() {
      	CRUD.clearForm($scope);
      };

  	  $scope.setSelectedProjectItem = function(projectId) {
  		var projectRecord = $rootScope.projectItems.$getRecord(projectId);
  		console.log(projectRecord);
  		CRUD.setSelectedProjectItem(projectRecord,$scope.currentProjectItem);
  		console.log($scope.currentProjectItem);

  	  };


  	  $scope.saveItem = function(currentProjectItem) {
	    var projectRecord = $rootScope.projectItems.$getRecord(currentProjectItem.id);
      	CRUD.saveItem(projectRecord,currentProjectItem,$rootScope.projectItems);
        $scope.alerts.type = 'success'
        $scope.alerts.msg = 'Item saved successfully!'
        $ionicListDelegate.closeOptionButtons();
  	
  		};

      $scope.deleteItem = function(currentProjectItem) {
	    var projectRecord = $rootScope.projectItems.$getRecord(currentProjectItem.id);
      	$rootScope.projectItems.$remove(projectRecord);
        $scope.alerts.type = 'danger'
        $scope.alerts.msg = 'The project record has been successfully removed!'
        $ionicListDelegate.closeOptionButtons();
  	
  		};

}])

