function myComponentController() {
  this.text = 'My brand new component!';
}

angular
  .module('app')
  .component('myComponent', {
    templateUrl: 'app/components/game/myComponent.html',
    controller: myComponentController
  });

