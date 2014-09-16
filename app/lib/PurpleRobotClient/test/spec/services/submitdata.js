'use strict';

describe('Service: Submitdata', function () {

  // load the service's module
  beforeEach(module('purpleRobotClientApp'));

  // instantiate service
  var Submitdata;
  beforeEach(inject(function (_Submitdata_) {
    Submitdata = _Submitdata_;
  }));

  it('should do something', function () {
    expect(!!Submitdata).toBe(true);
  });

});
