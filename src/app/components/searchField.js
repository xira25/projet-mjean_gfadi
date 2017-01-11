function searchFieldController($timeout, $q, $log, DataExtract, $scope) {
  var $ctrl = this;
  $ctrl.simulateQuery = false;
  $ctrl.isDisabled = false;
  // list of states to be displayed
  $ctrl.states = loadStates();
  $ctrl.querySearch = querySearch;
  $ctrl.selectedItemChange = selectedItemChange;
  $ctrl.searchTextChange = searchTextChange;
  $ctrl.newState = newState;

  function newState(state) {
    alert('This functionality is yet to be implemented!');
  }

  function querySearch(query) {
    var results = query ? $ctrl.states.filter(createFilterFor(query)) : $ctrl.states,
      deferred;
    if ($ctrl.simulateQuery) {
      deferred = $q.defer();
      $timeout(function () {
        deferred.resolve(results);
      },
        Math.random() * 1000, false);
      return deferred.promise;
    } else {
      return results;
    }
  }
  function searchTextChange(text) {
    $log.info('Text changed to ' + text);
  }
  function selectedItemChange(item) {
    $log.info('Item changed to ' + JSON.stringify(item));
  }
  // build list of states as map of key-value pairs
  function loadStates() {
    var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
                 Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
                 Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
                 Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
                 North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
                 South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
                 Wisconsin, Wyoming';
    return allStates.split(/, +/g).map(function (state) {
      return {
        value: state.toLowerCase(),
        display: state
      };
    });
  }
  // filter function for search query
  function createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);
    return function filterFn(state) {
      return (state.value.indexOf(lowercaseQuery) === 0);
    };
  }

  DataExtract.autoCompleteRecipe($scope).then(function (autoRecipe) {
    $ctrl.CompleteRecipeList = autoRecipe;
  });
}

angular
  .module('app')
  .component('searchField', {
    templateUrl: 'app/components/searchField.html',
    controller: searchFieldController
  });

