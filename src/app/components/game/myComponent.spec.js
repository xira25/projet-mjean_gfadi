describe('myComponent component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('myComponent', function () {
      return {
        templateUrl: 'app/myComponent.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<myComponent></myComponent>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
