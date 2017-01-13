angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(false).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'home'
      // default ==> component: 'app'
    });

  $stateProvider
    .state('home', {
      url: '/home',
      component: 'home'
    });

  $stateProvider
    .state('recommandations', {
      url: '/recommandations',
      component: 'recommandations'
    });

  $stateProvider
    .state('myfridge', {
      url: '/myfridge',
      component: 'myfridge'
    });

  $stateProvider
    .state('searchresults', {
      url: '/searchresults',
      component: 'searchresults'
    });

  $stateProvider
    .state('recipeInformation', {
      url: '/recipeInformation?id',
      component: 'recipeInformation'
    });

  $stateProvider
    .state('searchField', {
      url: '/searchField',
      component: 'searchField'
    });
}
