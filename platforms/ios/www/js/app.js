// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var myApp = angular.module('pmapp', ['ionic','firebase','ngCordova'])
.constant('FIREBASE_URL', 'https://projectminder.firebaseIO.com/');

myApp.run(['$ionicPlatform','$rootScope','$location',
  function($ionicPlatform,$rootScope,$location) {
  $rootScope.$on('$routeChangeError',
      function(event, next, previous, error) {
        if (error=='AUTH_REQUIRED') {
          $rootScope.message = 'Sorry, you must log in to access that page';
          $location.path('/login');
        } // AUTH REQUIRED
      }); //event info
        
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}]);


myApp.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('projectMinder.myMeetings', {
    url: '/myMeetings',
    views: {
      'tab2': {
        templateUrl: 'templates/myMeetings.html',
        controller: 'myMeetingsCtrl'
      }
    }
  })

  .state('projectMinder.myProjects', {
    url: '/myProjects',
    views: {
      'tab1': {
        templateUrl: 'templates/myProjects.html',
        controller: 'myProjectsCtrl'
      }
    }
  })

  .state('projectMinder', {
    url: '/success',
    templateUrl: 'templates/projectMinder.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'RegistrationController'
    // resolve: {
    //     currentAuth: function(Authentication) {
    //       return Authentication.logout();
    //     } //current Auth
    //   } //resolve
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'RegistrationController'
  })

  .state('projectMinder.projectDetail', {
    url: '/detail/:project_id',
    views: {
      'tab1': {
        templateUrl: 'templates/projectDetail.html',
        controller: 'projectDetailCtrl'
      }
    }
  })

    .state('projectMinder.meetingDetail', {
    url: '/meeting/:meeting_id',
    views: {
      'tab2': {
        templateUrl: 'templates/meetingDetail.html',
        controller: 'meetingDetailCtrl'
      }
    }
  })

    .state('projectMinder.mapView', {
    url: '/meeting/:meeting_id/:participant_id',
    views: {
      'tab2': {
        templateUrl: 'templates/mapView.html',
        controller: 'mapViewCtrl'
      }
    }
  })

    .state('projectMinder.editProject', {
    url: '/edit/:p_id',
    views: {
      'tab1': {
        templateUrl: 'templates/editProject.html',
        controller: 'editProjectCtrl'
      }
    }
  })

      .state('projectMinder.editMeeting', {
    url: '/meetingEdit/:m_id',
    views: {
      'tab2': {
        templateUrl: 'templates/editMeeting.html',
        controller: 'editMeetingCtrl'
      }
    }
  })

  .state('projectMinder.addProject', {
    url: '/addProject',
    views: {
      'tab1': {
        templateUrl: 'templates/addProject.html',
        controller: 'addProjectCtrl'
      }
    }
  })

  .state('projectMinder.addMeeting', {
    url: '/addMeeting',
    views: {
      'tab2': {
        templateUrl: 'templates/addMeeting.html',
        controller: 'addMeetingCtrl'
      }
    }
  })

  .state('projectMinder.profile', {
    url: '/profile',
    views: {
      'tab3': {
        templateUrl: 'templates/profile.html',
        controller: 'RegistrationController'
      }
    }
  })

$urlRouterProvider.otherwise('/login')

  

});