function recipeInformationController($scope, $location, DataExtract) {
  this.text = 'My brand new component! - REc';
  var $ctrl = this;
  // on img ngclick => show spec RecipeById
  DataExtract.getRecipeById($scope).then(function (recipeById) {
    $ctrl.recipeByIdName = recipeById.data.title;
    $ctrl.recipeByIdImage = recipeById.data.image;
    $ctrl.recipeByIdInstructions = recipeById.data.instructions;
    $ctrl.recipeByIdCookingTime = recipeById.data.cookingMinutes;
    $ctrl.recipeByIdPreparationTime = recipeById.data.preparationMinutes;
    $ctrl.recipeByIdLikes = recipeById.data.aggregateLikes;
    $ctrl.recipeByIdIngredients = recipeById.extendedIngredients;
    $ctrl.recipeByIdServings = recipeById.data.servings;
    $ctrl.recipeByIdVegetarian = recipeById.data.vegetarian;
    $ctrl.recipeByIdVegan = recipeById.data.vegan;
  });
}

angular
  .module('app')
  .component('recipeInformation', {
    templateUrl: 'app/components/RecipeInformation.html',
    controller: recipeInformationController
  });

