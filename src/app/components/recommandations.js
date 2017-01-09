function recommandationsController($scope, DataExtract) {
  this.text = 'My brand new component! - REc';
  var $ctrl = this;

  DataExtract.getJoke().then(function (joke) {
    $ctrl.joke = joke;
  });
}

angular
  .module('app')
  .component('recommandations', {
    templateUrl: 'app/components/recommandations.html',
    controller: recommandationsController
  });

