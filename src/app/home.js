function homeController($scope, DataExtract) {
  this.text = 'My brand new component! - REc';
  var $ctrl = this;

  DataExtract.getRandomRecipe().then(function (randomRecipe) {
    $ctrl.randomRecipeName = randomRecipe.data.recipes[0].title;
    $ctrl.randomRecipeImage = randomRecipe.data.recipes[0].image;
    $ctrl.randomRecipeInstructions = randomRecipe.data.recipes[0].instructions;
    $ctrl.randomRecipeCookingTime = randomRecipe.data.recipes[0].cookingMinutes;
    $ctrl.randomRecipePreparationTime = randomRecipe.data.recipes[0].preparationMinutes;
    $ctrl.randomRecipeLikes = randomRecipe.data.recipes[0].aggregateLikes;
    $ctrl.randomRecipeId = randomRecipe.data.recipes[0].id;
    $ctrl.randomRecipeIngredients = randomRecipe.data.recipes[0].extendedIngredients;
    $ctrl.randomRecipeServings = randomRecipe.data.recipes[0].servings;
    $ctrl.randomRecipeVegetarian = randomRecipe.data.recipes[0].vegetarian;
    $ctrl.randomRecipeVegan = randomRecipe.data.recipes[0].vegan;
    $ctrl.randomRecipeGlutenFree = randomRecipe.data.recipes[0].glutenFree;
    $ctrl.randomRecipeCheap = randomRecipe.data.recipes[0].cheap;
});
}

angular
  .module('app')
  .component('home', {
    templateUrl: 'app/home.html',
    controller: homeController
  });

