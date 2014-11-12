'use strict';

describe('Controller: SoundmixerCtrl', function () {

  // load the controller's module
  beforeEach(module('jsSoundMixApp'));

  var SoundmixerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SoundmixerCtrl = $controller('SoundmixerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
