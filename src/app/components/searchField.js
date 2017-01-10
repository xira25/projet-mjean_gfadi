function searchFieldController() {
  this.text = 'My brand new component! - Search Field';
}

angular
  .module('app')
  .component('searchField', {
    templateUrl: 'app/components/searchField.html',
    controller: searchFieldController
  });

