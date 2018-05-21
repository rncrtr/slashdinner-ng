'use strict';
/* global angular */
angular.module('navMenu', ['ngRoute'])

.directive('navMenu', function() {
  return {
    template: 
        '<ul id="menu" class="nav bg-dark col-12-sm nopad">'+
            '<li class="nav-item col-4-sm">'+
               '<a class="nav-link text-white" href="#!/">SlashDinner</a>'+
            '</li>'+
          '<li class="nav-item col-4-sm">'+
            '<a class="nav-link text-white" href="#!/register">Register</a>'+
          '</li>'+
          '<li class="nav-item col-4-sm">'+
            '<a class="nav-link text-white" href="#!/login">Login</a>'+
          '</li>'+
        '</ul>'
  };
});

angular.module('goBack', ['ngRoute'])
.directive('goBack', function() {
  return {
    template: 
        '<ul class="list-group">'+
            '<li class="list-group-item no-border">'+
                '<a href="javascript:history.back();">'+
                    '<span class="fas fa-fw fa-chevron-left text-left"></span>'+
                    '<span>Back</span>'+
                '</a>'+
            '</li>'+
        '</ul>'
  };
});