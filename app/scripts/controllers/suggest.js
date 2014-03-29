'use strict';

angular.module('karaokeApp')
  .controller('SuggestCtrl', function ($scope, $firebase) {
    $scope.singer = 'me';
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.me = 'Active';
    $scope.all = '';

    var usersRef = new Firebase("https://hrkaraoke.firebaseio.com/songs");

    $scope.users = $firebase(usersRef);

    $scope.submitSong = function(song) {
      
    };

  });
