function randomRecipeController($scope, DataExtract) {
  var $ctrl = this;

  //Similaire à recipeInformation, cepepdant on ne récupère pas un élément mais une liste, dans le cas présent nous ne récupérons qu'un seul élément
  // c'est pourquoi le [0] est en dur.
  DataExtract.getRandomRecipe().then(function (randomRecipe) {
    $ctrl.randomRecipeName = randomRecipe.data.recipes[0].title;
    $ctrl.randomRecipeImage = randomRecipe.data.recipes[0].image;
    $ctrl.randomRecipeCookingTime = randomRecipe.data.recipes[0].cookingMinutes;
    $ctrl.randomRecipePreparationTime = randomRecipe.data.recipes[0].preparationMinutes;
    $ctrl.randomRecipeLikes = randomRecipe.data.recipes[0].aggregateLikes;
    $ctrl.randomRecipeId = randomRecipe.data.recipes[0].id;
  });
}

angular
  .module('app')
  .component('randomRecipe', {
    templateUrl: 'app/components/randomRecipe.html',
    controller: randomRecipeController
  });

