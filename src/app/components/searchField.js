function searchFieldController($scope, $location, DataExtract) {
  this.text = 'My brand new component! - REc';
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

