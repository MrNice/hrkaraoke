'use strict';

angular.module('karaokeApp')
  .controller('SuggestCtrl', function ($rootScope, $scope, $firebase, simpleLogin) {
    $scope.me = {};
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.log('Rootscope: ', $rootScope.user);

    if(!($rootScope.user)){
      simpleLogin.loginGithub(function(user) {
        $rootScope.user = user;
        $scope.user = $rootScope.user;
        $scope.newSong = { owner: $scope.user.username };
      });
    }

    $scope.submitSong = function(song) {
      var songsRef = new Firebase("https://hrkaraoke.firebaseio.com/songs");


      var songs = $firebase(songsRef);

      songs.$add(song);

    }

  });
