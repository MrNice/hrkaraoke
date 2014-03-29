'use strict';

angular.module('karaokeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase',
  'angularfire.firebase',
  'angularfire.login',
  'simpleLoginTools'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        authRequired: false,
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/suggest', {
        authRequired: true, // if true, must log in before viewing this page
        templateUrl: 'views/suggest.html',
        controller: 'SuggestCtrl'
      })
      .when('/vote', {
        authRequired: true, // if true, must log in before viewing this page
        templateUrl: 'views/vote.html',
        controller: 'VoteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
