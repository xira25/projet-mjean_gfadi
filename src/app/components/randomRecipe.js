function randomRecipeController($scope, DataExtract) {
  var $ctrl = this;
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

