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

  $ctrl.getFoodTrivia = function getFoodTrivia() {
    return $http({
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/trivia/random?mashape-key=4PTOBxUqKhmshG0KYCigfNqnZySvp1U6PpGjsnmmcY6n4o12Kp'
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
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=3&mashape-key=4PTOBxUqKhmshG0KYCigfNqnZySvp1U6PpGjsnmmcY6n4o12Kp'
    }).then(function successCallback(response) {
      return response;
    }, function errorCallback() {
      return 'Erreur lors du call';
    });
  };

  $ctrl.getTwelveRandomRecipe = function getTwelveRandomRecipe() {
    return $http({
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=12&mashape-key=4PTOBxUqKhmshG0KYCigfNqnZySvp1U6PpGjsnmmcY6n4o12Kp'
    }).then(function successCallback(response) {
      return response;
    }, function errorCallback() {
      return 'Erreur lors du call';
    });
  };

  $ctrl.getRecipeById = function getRecipeById(id) {
    return $http({
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + id + '/information?mashape-key=4PTOBxUqKhmshG0KYCigfNqnZySvp1U6PpGjsnmmcY6n4o12Kp'
    }).then(function successCallback(response) {
      return response;
    }, function errorCallback() {
      return 'Erreur lors du call';
    });
  };

  $ctrl.autoCompleteRecipe = function getRautoCompleteRecipeecipeById($scope) {
    return $http({
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/autocomplete?number=12&query=' + $scope.search + '&mashape-key=4PTOBxUqKhmshG0KYCigfNqnZySvp1U6PpGjsnmmcY6n4o12Kp'
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
