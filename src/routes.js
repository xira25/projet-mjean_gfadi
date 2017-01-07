angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
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
    .state('advancedsearch', {
      url: '/advancedsearch',
      component: 'advancedsearch'
    });

  $stateProvider
    .state('searchresults', {
      url: '/searchresults',
      component: 'searchresults'
    });
}

