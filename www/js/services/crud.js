myApp.factory('CRUD', 
  ['$firebaseArray','FIREBASE_URL','$cordovaDialogs',
  function($firebaseArray, FIREBASE_URL, $cordovaDialogs) {

  var ref = new Firebase(FIREBASE_URL + "projects");
  var ref2 = new Firebase(FIREBASE_URL + "meetings");
  var ref3 = new Firebase(FIREBASE_URL + "users");

  // var offsetRef = new Firebase(FIREBASE_URL+".info/serverTimeOffset");
  // offsetRef.on("value", function(snap) {
  // var offset = snap.val();
  // console.log(offset);
  // });
  return {
    //project table init
    projectsInit: function() {
      return ref;
    }, //init project table
    setToArray: function(ref) {
      var projectItems = $firebaseArray(ref);
      return projectItems;
    },

    //Project CRUD functions start here
    addProject: function(projectArray,newProject,studentArray){
    	projectArray.$add({
      		name: newProject.name,
      		unit: newProject.unit,
      		supervisorFirstName: newProject.supervisorFirstName,
      		supervisorLastName: newProject.supervisorLastName,
          supervisorNameCombined: newProject.supervisorFirstName + " " + newProject.supervisorLastName,
      		students: studentArray,
      		startDate: newProject.startDate.toString(),
      		endDate: newProject.endDate.toString(),
      		status: newProject.status,
      		description: newProject.description
      	}).then(function(ref){
      		var id = ref.key();
  			console.log("added record with id " + id);
        $cordovaDialogs.alert('Project record added successfully', 'Status', 'OK!')
            .then(function() {
            });
  			// console.log(projectArray.$indexFor(id)); 
  			// projectIndex = projectArray.$indexFor(id);
      	});
    },

    addOneStudentSet: function(newStudents) {
	 	newStudents.push({name:'',num:'',email:''});
    },
    setSelectedProjectItem: function(serverItem,localItem) {
    localItem.id = serverItem.$id;
		localItem.name = serverItem.name;
		localItem.unit = serverItem.unit;
		localItem.supervisorFirstName = serverItem.supervisorFirstName;
		localItem.supervisorLastName = serverItem.supervisorLastName;
		localItem.students = serverItem.students;
		localItem.startDate = serverItem.startDate;
		localItem.endDate = serverItem.endDate;
		localItem.status = serverItem.status;
		localItem.description = serverItem.description;
    // localItem.startDate = localItem.startDate.toString();
    // localItem.endDate = localItem.endDate.toString();
    },

    saveItem: function(serverItem,localItem,projectArray) {
    serverItem.name = localItem.name,
    serverItem.unit = localItem.unit,
    serverItem.supervisorFirstName = localItem.supervisorFirstName,
    serverItem.supervisorLastName = localItem.supervisorLastName,
		serverItem.students = localItem.students,
		serverItem.startDate = localItem.startDate.toString(),
		serverItem.endDate = localItem.endDate.toString(),
		serverItem.status = localItem.status,
		serverItem.description = localItem.description,
		projectArray.$save(serverItem).then(function(){
		console.log(serverItem);
    $cordovaDialogs.alert('Project record updated successfully', 'Status', 'OK!')
            .then(function() {
            });
		});
    },
    clearForm: function(scope){
    	scope.newProject = {};
      scope.newStudents = [{name:'',num:'',email:''}];
    },

    //project CRUD functions end here

    // meeting table init
    meetingsInit: function() {
      return ref2;
    }, //init meeting table

    setToArray2: function(ref) {
      var meetingItems = $firebaseArray(ref);
      return meetingItems;
    },

    //meeting CRUD functions end here
    addMeeting: function(meetingArray,newMeeting,participantArray){
      meetingArray.$add({
          topic: newMeeting.topic,
          unit: newMeeting.unit,
          location: newMeeting.location,
          supervisorFirstName: newMeeting.supervisorFirstName,
          supervisorLastName: newMeeting.supervisorLastName,
          supervisorNameCombined: newMeeting.supervisorFirstName + " " + newMeeting.supervisorLastName,
          participants: participantArray,
          startDate: newMeeting.startDate,
          startTime: newMeeting.startTime,
          status: newMeeting.status
        }).then(function(ref){
          var id = ref.key();
        console.log("added meeting with id " + id);
        $cordovaDialogs.alert('Meeting record added successfully', 'Status', 'OK!')
            .then(function() {
            });
        // console.log(projectArray.$indexFor(id)); 
        // projectIndex = projectArray.$indexFor(id);
        });
    },

    addOneParticipantSet: function(newParticipants) {
    newParticipants.push({name:'',num:'',email:''});
    },

    setSelectedMeetingItem: function(serverItem,localItem) {
    localItem.id = serverItem.$id;
    localItem.topic = serverItem.topic;
    localItem.unit = serverItem.unit;
    localItem.location = serverItem.location;
    localItem.supervisorFirstName = serverItem.supervisorFirstName;
    localItem.supervisorLastName = serverItem.supervisorLastName;
    localItem.participants = serverItem.participants;
    localItem.startDate = serverItem.startDate;
    localItem.status = serverItem.status;
    // localItem.startDate = localItem.startDate.toString();
    // localItem.endDate = localItem.endDate.toString();
    },

    saveMeetingItem: function(serverItem,localItem,meetingArray) {
    serverItem.topic = localItem.topic,
    serverItem.unit = localItem.unit,
    localItem.location = serverItem.location,
    serverItem.supervisorFirstName = localItem.supervisorFirstName,
    serverItem.supervisorLastName = localItem.supervisorLastName,
    serverItem.participants = localItem.participants,
    serverItem.startDate = localItem.startDate,
    serverItem.status = localItem.status,
    meetingArray.$save(serverItem).then(function(){
    console.log(serverItem);
    $cordovaDialogs.alert('Meeting record updated successfully', 'Status', 'OK!')
            .then(function() {
            });
    });
    },// 2016/04/12

    // meeting table init
    locationsInit: function() {
      return ref3;
    }, //init meeting table

    setToArray3: function(ref) {
      var userlocations = $firebaseArray(ref);
      return userLocations;
    },
    // addLocationRecord: function(locationArray,currentUser){
    //   locationArray.$add({
    //       userID: currentUser.$id,
    //       userLat: currentUser.lat,
    //       userLong: currentUser.long
    //     }).then(function(ref){
    //       var id = ref.key();
    //     console.log("location created with id" + id);
        // console.log(projectArray.$indexFor(id)); 
        // projectIndex = projectArray.$indexFor(id);
    //     });
    // },
    updateLocation: function(userLocation,serverLocation,locationArray){
      serverLocation.lat = userLocation.lat,
      serverLocation.long = userLocation.long,
      locationArray.$save(serverLocation).then(function(){
      console.log(serverLocation);
      });
     }

  };

}]); //factory

