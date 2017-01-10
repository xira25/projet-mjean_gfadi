describe('recipeInformation component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('recipeInformation', function () {
      return {
        templateUrl: 'app/RecipeInformation.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<recipeInformation></recipeInformation>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
