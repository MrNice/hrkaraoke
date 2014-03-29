'use strict';

angular.module('karaokeApp')
  .controller('SuggestCtrl', function ($rootScope, $scope, $firebase, simpleLogin) {
    $scope.singer = 'me';
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.me = 'Active';
    $scope.all = '';

    console.log();

    $scope.newSong = { owner: 'nicholas'};

    var usersRef = new Firebase("https://hrkaraoke.firebaseio.com/users");

    $scope.users = $firebase(usersRef);

    var songsRef = new Firebase("https://hrkaraoke.firebaseio.com/songs");

    $scope.songs = $firebase(songsRef);

    $scope.submitSong = function(song) {
      console.log('submitting', song);
      $scope.songs.$add(song);
    };

  });
