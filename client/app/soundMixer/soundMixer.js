'use strict';

angular.module('jsSoundMixApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('soundMixer', {
                url: '/soundMixer',
                templateUrl: 'app/soundMixer/soundMixer.html',
                controller: 'SoundmixerCtrl',
                authenticate: true
            });
    });


angular.module('jsSoundMixApp').directive('hboTabs', function()
    
});

angular.module('jsSoundMixApp').controller('FileUploadCtrl', ['$scope', '$upload', function($scope, $upload) {
    $scope.onFileSelect = function($files) {
        console.log($files); // undefined
        //$files: an array of files selected, each file has name, size, and type.
        for (var i = 0; i < $files.length; i++) {
            var file = $files[i];
            $scope.upload = $upload.upload({
                url: '/api/audioFiles', //upload.php script, node.js route, or servlet url
                data: {
                    myObj: $scope.myModelObj
                },
                file: file,
            }).progress(function(evt) {
                console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
            }).success(function(data, status, headers, config) {
                // file is uploaded successfully
                console.log(data);
            });
        }
    };
}]);
