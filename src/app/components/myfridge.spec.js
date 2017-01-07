describe('myfridge component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('myfridge', function () {
      return {
        templateUrl: 'app/myfridge.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<myfridge></myfridge>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
