function advancedsearchController() {
  this.text = 'My brand new component! - Advanced Search';
}

angular
  .module('app')
  .component('advancedsearch', {
    templateUrl: 'app/components/advancedsearch.html',
    controller: advancedsearchController
  });

