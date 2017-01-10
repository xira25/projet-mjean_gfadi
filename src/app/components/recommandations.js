function recommandationsController($scope, DataExtract) {
  this.text = 'My brand new component! - REc';
  var $ctrl = this;
  DataExtract.getTwelveRandomRecipe().then(function (randomRecipe) {
    $ctrl.randomRecipes = randomRecipe.data.recipes;
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
  .component('recommandations', {
    templateUrl: 'app/components/recommandations.html',
    controller: recommandationsController
  });

