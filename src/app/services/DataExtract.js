function DataExtract($http) {
  var $ctrl = this;

  $ctrl.getJoke = function getJoke() {
    return $http({
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/jokes/random?mashape-key=4PTOBxUqKhmshG0KYCigfNqnZySvp1U6PpGjsnmmcY6n4o12Kp'
    }).then(function successCallback(response) {
      // $ctrl.joke = response.data.text;
      return response.data.text;
    }, function errorCallback() {
      // $ctrl.joke = ;
      return 'Erreur lors du call';
    });
  };

  $ctrl.getRandomRecipe = function getRandomRecipe() {
    return $http({
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?mashape-key=4PTOBxUqKhmshG0KYCigfNqnZySvp1U6PpGjsnmmcY6n4o12Kp'
    }).then(function successCallback(response) {
      return response;
    }, function errorCallback() {
      return 'Erreur lors du call';
    });
  };
}



DataExtract.prototype.getData = function () {
  return 1 + 2;
};

angular
  .module('app')
  .service('DataExtract', DataExtract);
