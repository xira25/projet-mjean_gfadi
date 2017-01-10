function homeController($scope, DataExtract) {
  this.text = 'My brand new component! - REc';
  var $ctrl = this;

  DataExtract.getRandomRecipe().then(function (randomRecipe) {
<<<<<<< HEAD
    $ctrl.randomRecipe = randomRecipe.data;
    $ctrl.randomRecipeName = randomRecipe.data.recipes.title;
    $ctrl.randomRecipeImage = randomRecipe.data.recipes.image;
=======
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
>>>>>>> 70b3a063f30a8c82532a116b4757e0dacb61873f
  });
}

angular
  .module('app')
  .component('home', {
    templateUrl: 'app/home.html',
    controller: homeController
  });

