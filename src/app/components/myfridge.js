function myfridgeController($timeout, DataExtract, $scope) {
  var $ctrl = this;
  var url = 'https://spoonacular.com/cdn/ingredients_100x100';
  $ctrl.getIngredientQuery = function () {
    DataExtract.getIngredientQuery($scope.search).then(function (autoIngredient) {
      $ctrl.text = $scope.search;
      $ctrl.IngredientList = autoIngredient.data;
    });
  };

  $scope.$watch('search', function () {
    $ctrl.getIngredientQuery();
  });

  $scope.getImgUrl = function (imgName) {
    return url + imgName;
  };
}

angular
  .module('app')
  .component('myfridge', {
    templateUrl: 'app/components/myfridge.html',
    controller: myfridgeController
  });

