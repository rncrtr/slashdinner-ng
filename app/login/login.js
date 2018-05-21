'use strict';
/*global angular*/
/*global firebase*/
angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$scope','$location',function($scope,$location) {

  $scope.processLoginForm = function(){
    firebaseLogin($scope.login_email,$scope.login_password);
  }
  
  function firebaseLogin(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(resp){
      console.log(resp);
      $location.path('#!/');
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      $scope.loginErrMsg = 'Server says: '+errorMessage;
    });
  }

}]);