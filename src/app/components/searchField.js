function searchFieldController($timeout, DataExtract, $scope) {
  var $ctrl = this;

  $ctrl.getRecipesQuery = function () {
    DataExtract.getRecipeListWithQuery($scope.recipe).then(function (autoRecipe) {
      $ctrl.text = $scope.search;
      $ctrl.CompleteRecipeList = autoRecipe.data;
      $ctrl.id = autoRecipe.data.id;
    });
  };

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
