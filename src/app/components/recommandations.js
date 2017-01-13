function recommandationsController($scope, DataExtract) {
  this.text = 'My brand new component! - REc';
  var $ctrl = this;

  // Récupère une liste de recette (12) aléatoires.
  // Peut être amélioré avec des catégories
  DataExtract.getTwelveRandomRecipe().then(function (randomRecipe) {
    $ctrl.randomRecipes = randomRecipe.data.recipes;
  });
}

angular
  .module('app')
  .component('recommandations', {
    templateUrl: 'app/components/recommandations.html',
    controller: recommandationsController
  });

