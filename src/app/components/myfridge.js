function myfridgeController() {
  this.text = 'My brand new component! - my Fridge';
}

angular
  .module('app')
  .component('myfridge', {
    templateUrl: 'app/components/myfridge.html',
    controller: myfridgeController
  });

