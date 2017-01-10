describe('randomRecipe component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('randomRecipe', function () {
      return {
        templateUrl: 'app/randomRecipe.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<randomRecipe></randomRecipe>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
