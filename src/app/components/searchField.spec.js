describe('searchField component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('searchField', function () {
      return {
        templateUrl: 'app/searchField.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<searchField></searchField>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
