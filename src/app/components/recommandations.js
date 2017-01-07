function recommandationsController() {
  this.text = 'My brand new component! - REc';
}

angular
  .module('app')
  .component('recommandations', {
    templateUrl: 'app/components/recommandations.html',
    controller: recommandationsController
  });

