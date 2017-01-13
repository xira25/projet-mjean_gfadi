function myfridgeController($timeout, DataExtract, $scope) {
  var $ctrl = this;
  var url = 'https://spoonacular.com/cdn/ingredients_100x100';

  // permet de completer la datalist du champ de recherche en fonction de ce que le user a écrit dans la searchbox
  $ctrl.getIngredientQuery = function () {
    DataExtract.getIngredientQuery($scope.search).then(function (autoIngredient) {
      $ctrl.text = $scope.search;
      $ctrl.IngredientList = autoIngredient.data;
    });
  };

  // Permet de guetter les changements dans la barre de recherche
  $scope.$watch('search', function () {
    $ctrl.getIngredientQuery();
  });

  // Fonction pour retourner l'image de l'ingrédient (pour perspective future)
  $scope.getImgUrl = function (imgName) {
    return url + imgName;
  };

  // Donne la liste des ingrédients en paramètre, retourne une liste de recettes contenant ces ingrédients.
  $ctrl.getRecipeByIngredient = function (ingredients) {
    DataExtract.getRecipeByIngredient(ingredients).then(function (RecipeByIngredient) {
      $ctrl.RecipeByIngredient = RecipeByIngredient.data;
    });
  };

  var MADB_KEY = 'maDB';
  var ingredients = angular.fromJson(localStorage.getItem(MADB_KEY)) || [];

  // Les opérations Create / Delete des ingrédients est geré directement dans ce controlleur (pas besoin de service, on ne l'utilie qu'ici)

  $ctrl.addIngredient = function () {
    var addIngr = $scope.search;
    ingredients.push(addIngr);
    saveToLocalStorage();
  };

  $ctrl.remove = function (ingredient) {
    var index = ingredients.indexOf(ingredient);
    ingredients.splice(index, 1);
    saveToLocalStorage();
  };

  $ctrl.getIngredientsByIndex = function (index) {
    return ingredients[index];
  };

  $ctrl.getIngredients = function () {
    return ingredients;
  };

  function saveToLocalStorage() {
    localStorage.setItem(MADB_KEY, angular.toJson(ingredients));
  }
}

angular
  .module('app')
  .component('myfridge', {
    templateUrl: 'app/components/myfridge.html',
    controller: myfridgeController
  });

