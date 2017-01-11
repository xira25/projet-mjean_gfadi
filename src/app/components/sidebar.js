function sidebarController($scope, DataExtract) {
  var $ctrl = this;

 // Pour récupérer une blague concernant la nourriture
  DataExtract.getJoke().then(function (joke) {
    $ctrl.joke = joke;
  });

  // Pour récupérer une information concernant la nourriture (similaire à getJoke)
  DataExtract.getFoodTrivia().then(function (foodTrivia) {
    $ctrl.foodTrivia = foodTrivia;
  });

  // Pour récupérer des recettes aléatoires.
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

