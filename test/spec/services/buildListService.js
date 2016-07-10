'use strict';


describe('build list service', function () {
  var BuildAPI, httpBackend;

  beforeEach(module('secondTestApp'));

  beforeEach(inject(function (_BuildAPI_, $httpBackend) {
    BuildAPI = _BuildAPI_;
    httpBackend = $httpBackend;
  }));

  it('should return correct data', function () {
    httpBackend.whenGET('/data/builds.json').respond({
      data: [
        {
          'build': 'Tenrox-R11235',
          'owner': 'jtuck',
          'timeStarted': null,
          'buildData': {
            'completion': 0
          }
        }, {
          'changeList': '432462',
          'owner': 'jtuck',
          'timeStarted': 1397814060,
          'buildData': {
            'completion': 70
          }
        }
      ]
    });

    BuildAPI.getBuildsList().then(function(data){
      expect(data.data.length).toBe(2);
      expect(data.data[0].build).toBe('Tenrox-R11235');
      expect(data.data[1].changeList).toBe('432462');
    });

    httpBackend.flush();
  });

});
