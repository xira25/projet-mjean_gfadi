function searchFieldController($timeout, $q, $log, DataExtract, $scope) {
  var $ctrl = this;

  DataExtract.autoCompleteRecipe($scope).then(function (autoRecipe) {
    $ctrl.CompleteRecipeList = autoRecipe;
  });
}

angular
  .module('app')
  .component('searchField', {
    templateUrl: 'app/components/searchField.html',
    controller: searchFieldController
  });

