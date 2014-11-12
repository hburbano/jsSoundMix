'use strict';

angular.module('jsSoundMixApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('soundMixer', {
                url: '/soundMixer',
                templateUrl: 'app/soundMixer/soundMixer.html',
                controller: 'SoundmixerCtrl'
            });
    });

