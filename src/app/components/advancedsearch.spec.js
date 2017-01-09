describe('advancedsearch component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('advancedsearch', function () {
      return {
        templateUrl: 'app/advancedsearch.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<advancedsearch></advancedsearch>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
