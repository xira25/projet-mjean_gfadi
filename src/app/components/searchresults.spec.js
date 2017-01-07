describe('searchresults component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('searchresults', function () {
      return {
        templateUrl: 'app/searchresults.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<searchresults></searchresults>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
