'use strict';

angular.module('karaokeApp')
  .controller('VoteCtrl',['$routeParams', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
