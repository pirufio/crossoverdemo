describe("build item service", function () {
  var BuildItem, httpBackend;

  beforeEach(module("secondTestApp"));

  beforeEach(inject(function (_BuildItem_, $httpBackend) {
    BuildItem = _BuildItem_;
    httpBackend = $httpBackend;
  }));

  it("should assign correct values to model", function () {

    var buildList = [
      {
        "build":"Tenrox-R11235",
        "owner":"jtuck",
        "timeStarted": null,
        "buildData": {
          "completion":0
        }
      },{
        "changeList":"432462",
        "owner":"jtuck",
        "timeStarted":1397814060,
        "buildData":{
          "completion":70
        }
      },{
        "changeList":"432462",
        "owner":"sammy",
        "timeStarted":1397818380,
        "buildData":{
          "completion":100,
          "metrics":{
            "test": {"previous":0,"actual":64},
            "maintainability": {"previous":55,"actual":53},
            "security": {"previous":64,"actual":64},
            "workmanship": {"previous":64,"actual":64}
          },
          "build":{
            "debug":true,
            "release":true,
            "date" : 1397814060
          },
          "unitTest":{
            "total": 152,
            "passed": 142,
            "covered": 76
          },
          "functionalTest":{
            "total": 152,
            "passed": 142,
            "covered": 76
          }
        }
      },{
        "build":"Tenrox-R11234",
        "owner":"",
        "timeStarted":1397727720,
        "buildData":{
          "completion":100,
          "metrics":{
            "test": {"previous":62,"actual":64},
            "maintainability": {"previous":51,"actual":53},
            "security": {"previous":64,"actual":64},
            "workmanship": {"previous":72,"actual":72}
          },
          "build":{
            "debug":true,
            "release":true,
            "date" : 1397814060
          },
          "unitTest":{
            "total": 185,
            "passed": 142,
            "covered": 76
          },
          "functionalTest":{
            "total": 4321,
            "passed": 3145,
            "covered": 23
          }
        }
      }
    ]

    angular.forEach(buildList, function(value, key){

      var item = new BuildItem(value);
      switch (key){
        case 0:
          expect(item.state).toBe('Pending');
            break;
        case 1:
          expect(item.state).toBe('Running');
          break;
        case 2:
          expect(item.state).toBe('Rejected');
          break;
        case 3:
          expect(item.state).toBe('Complete');
          break;
      }

    });


  });

});
