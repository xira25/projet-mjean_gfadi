function recipeInformationController($scope, $location, DataExtract, $stateParams) {
  var $ctrl = this;
  this.text = 't<span>g</span>';

  // Lien entre la valeur retourné par le service DataExtract et ce que l'on va afficher dans la vue.
  // On récupère les arguments pour les utiliser dans les ng-ifs
  DataExtract.getRecipeById($stateParams.id).then(function (recipeById) {
    $ctrl.recipeByIdName = recipeById.data.title;
    $ctrl.recipeByIdImage = recipeById.data.image;
    $ctrl.recipeByIdInstructions = recipeById.data.instructions;
    $ctrl.recipeByIdCookingTime = recipeById.data.cookingMinutes;
    $ctrl.recipeByIdPreparationTime = recipeById.data.preparationMinutes;
    $ctrl.recipeByIdLikes = recipeById.data.aggregateLikes;
    $ctrl.recipeByIdIngredients = recipeById.data.extendedIngredients;
    $ctrl.recipeByIdServings = recipeById.data.servings;
    $ctrl.recipeByIdVegetarian = recipeById.data.vegetarian;
    $ctrl.recipeByIdVegan = recipeById.data.vegan;
    $ctrl.recipeByIdGlutenFree = recipeById.data.glutenFree;
    $ctrl.recipeByIdCheap = recipeById.data.cheap;
    $ctrl.recipeByIdInstructions = recipeById.data.instructions;
    $ctrl.recipeByIdId = recipeById.data.id;
  });
}

angular
  .module('app')
  .component('recipeInformation', {
    templateUrl: 'app/components/RecipeInformation.html',
    controller: recipeInformationController
  });

