'use strict';
angular.module('angularfire.login', ['firebase', 'angularfire.firebase'])

  .run(function(simpleLogin) {
    simpleLogin.init();
  })

  .factory('simpleLogin', function($rootScope, $firebaseSimpleLogin, firebaseRef, profileCreator, $timeout) {
    function assertAuth() {
      if( auth === null ) { throw new Error('Must call loginService.init() before using its methods'); }
    }

    var auth = null;
    return {
      init: function() {
        auth = $firebaseSimpleLogin(firebaseRef());
        return auth;
      },

      logout: function() {
        assertAuth();
        auth.$logout();
      },


      /**
       * @param {string} email
       * @param {string} pass
       * @param {Function} [callback]
       * @returns {*}
       */
       loginGithub: function(callback) {
        assertAuth();
        auth.$login('github', {
          rememberMe: true,
          scope: 'user'
        }).then(function(user){
          console.log('the user looks like this first: ', user);
          firebaseRef('users/'+ user.username).set({ username: user.displayName, avatar: user.avatar_url, songcount: 0 }, function(err) {
          console.log(callback);
          if( callback ) {
            callback(user);
          };
        });
      }, callback);
      },

      createAccount: function(user, callback) {
        assertAuth();
        auth.$createUser(user).then(function(user) { callback(null, user); }, callback);
      },

      createProfile: profileCreator
    };
  })

  .factory('profileCreator', function(firebaseRef, $timeout) {
    return function(user, callback) {

      firebaseRef('users/'+ user.username).set({ username: user.displayName, avatar: avatar_url }, function(err) {
        //err && console.error(err);
        if( callback ) {
          $timeout(function() {
            callback(err);
          });
        }
      });
    };

  });
