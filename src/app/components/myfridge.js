function myfridgeController() {
  this.text = 'My brand new component!';
}

angular
  .module('app')
  .component('myfridge', {
    templateUrl: 'app/components/myfridge.html',
    controller: myfridgeController
  });

