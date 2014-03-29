'use strict';

angular.module('karaokeApp')
  .controller('SuggestsongCtrl',['$routeParams', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
