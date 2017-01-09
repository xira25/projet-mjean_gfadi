function homeController() {
  this.text = 'My brand new component - Home!';
}

angular
  .module('app')
  .component('home', {
    templateUrl: 'app/home.html',
    controller: homeController
  });

