function homeController($scope, DataExtract) {
  this.text = 'My brand new component! - REc';
  var $ctrl = this;

  DataExtract.getRandomRecipe().then(function (randomRecipe) {
    $ctrl.randomRecipe = randomRecipe.data;
    $ctrl.randomRecipeName = randomRecipe.data.recipes.title;
    $ctrl.randomRecipeImage = randomRecipe.data.recipes.image;
  });
}

angular
  .module('app')
  .component('home', {
    templateUrl: 'app/home.html',
    controller: homeController
  });

