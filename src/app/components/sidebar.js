function sidebarController($scope, DataExtract) {
  this.text = 'My brand new component! - REc';
  var $ctrl = this;

  DataExtract.getJoke().then(function (joke) {
    $ctrl.joke = joke;
  });

  DataExtract.getFoodTrivia().then(function (foodTrivia) {
    $ctrl.foodTrivia = foodTrivia;
  });

  DataExtract.getRandomRecipe().then(function (randomRecipe) {
    $ctrl.randomRecipes = randomRecipe.data.recipes;
    $ctrl.randomRecipeName = randomRecipe.data.recipes[0].title;
    $ctrl.randomRecipeImage = randomRecipe.data.recipes[0].image;
    $ctrl.randomRecipeCookingTime = randomRecipe.data.recipes[0].cookingMinutes;
    $ctrl.randomRecipePreparationTime = randomRecipe.data.recipes[0].preparationMinutes;
    $ctrl.randomRecipeLikes = randomRecipe.data.recipes[0].aggregateLikes;
  });
}

angular
  .module('app')
  .component('sidebar', {
    templateUrl: 'app/components/sidebar.html',
    controller: sidebarController
  });

