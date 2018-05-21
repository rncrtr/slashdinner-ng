'use strict';
/* global angular */
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'navMenu',
  'goBack',
  'myApp.register',
  'myApp.login',
  'myApp.meals'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}]);
