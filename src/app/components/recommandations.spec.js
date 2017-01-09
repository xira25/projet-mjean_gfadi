describe('recommandations component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('recommandations', function () {
      return {
        templateUrl: 'app/recommandations.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<recommandations></recommandations>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
