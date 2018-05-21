'use strict';
/*global angular*/
/*global firebase*/
angular.module('myApp.meals', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'meals/meals.html',
    controller: 'MealsCtrl'
  });
}])

.controller('MealsCtrl', ['$scope','$location',function($scope,$location) {
$scope.meals = [
  {name:'Assassin Chicken',tags:'chicken, asian, teriyaki, dinner',ingredients:'teriyaki sauce, chives'},
  {name:'Spaghetti',tags:'dinner, tomato, pasta',ingredients:'tomato sauce, sausage, pepperoni'}
  ];

}]);