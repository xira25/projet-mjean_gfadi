function searchresultsController() {
  this.text = 'My brand new component! - Search Results';
}

angular
  .module('app')
  .component('searchresults', {
    templateUrl: 'app/components/searchresults.html',
    controller: searchresultsController
  });

