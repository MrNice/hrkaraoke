'use strict';

angular.module('karaokeApp')
  .controller('VoteCtrl', function ($scope, $firebase) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.buttons = {
      all: 'active',
      mine: ''
    };

    var songsRef = new Firebase("https://hrkaraoke.firebaseio.com/songs");

    $scope.songs = $firebase(songsRef);
    console.log($scope.songs);

    $scope.addSong = function() {
      $scope.songs.$add({
        artist: 'BNL',
        title: 'One Week',
        singer: 'Nicholas',
        votes: 0
      });
    }
  });
