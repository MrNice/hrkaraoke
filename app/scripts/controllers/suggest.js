'use strict';

angular.module('karaokeApp')
  .controller('SuggestCtrl', function ($scope, $firebase) {
    $scope.singer = 'me';
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var usersRef = new Firebase("https://hrkaraoke.firebaseio.com/songs");

    $scope.users = $firebase(usersRef);

  });
