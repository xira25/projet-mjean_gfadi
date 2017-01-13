function searchFieldController($timeout, DataExtract, $scope) {
  var $ctrl = this;

// Récupère les informations liés à la recette selon ce que l'user à écrit ($scope.search)
  $ctrl.getRecipesQuery = function () {
    DataExtract.getRecipeListWithQuery($scope.recipe).then(function (autoRecipe) {
      $ctrl.text = $scope.search;
      $ctrl.CompleteRecipeList = autoRecipe.data;
      $ctrl.id = autoRecipe.data.id;
      $ctrl.name = autoRecipe.data.name;
    });
  };

// Surveille les changements effectués au sein de la search Box (link au model option de la searchBox)
  $scope.$watch('recipe', function () {
    $ctrl.getRecipesQuery();
  });
}

angular
  .module('app')
  .component('searchField', {
    templateUrl: 'app/components/searchField.html',
    controller: searchFieldController
  });
