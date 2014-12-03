'use strict';

angular.module('jsSoundMixApp')
    .controller('SoundmixerCtrl', function($scope, $http) {
        $scope.demoAudio = [];

        $http.get('/api/audioFiles').success(function(demoAudio) {
            $scope.demoAudio = demoAudio;
        });
    });
