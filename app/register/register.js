'use strict';
/*global angular*/
/*global firebase*/
angular.module('myApp.register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'register/register.html',
    controller: 'RegisterCtrl'
  });
}])

.controller('RegisterCtrl', ['$scope',function($scope) {
  $scope.processRegisterForm = function(){
    if($scope.email){
      // email exists
      if($scope.password){
        // password exists
        if($scope.password==$scope.confirm){
          // passwords match and user exists
          firebaseCreateUser($scope.email, $scope.password);
        }else{
          $scope.registerErrMsg = 'Password and Confirm do not match, please adjust and try again.';
        }
      }
    }
  }
  
  function firebaseCreateUser(email, password){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      $scope.registerErrMsg = 'Server says: '+errorMessage;
    });
  }
}]);