var PatioWeb = angular.module('PatioWeb', ['ngRoute']);

PatioWeb.config(function($routeProvider) {
  $routeProvider.when('/', {
    controller:'homeController',
    templateUrl: 'views/index.jade',
    controllerAs: 'vm'
  })
  .when('/articleData', {
    controller:'ArticleController',
    templateUrl: 'views/article.jade',
    controllerAs: 'vm'
  })
  .when('/appData', {
    controller:'AppsController',
    templateUrl: 'views/apps.jade',
    controllerAs: 'vm'
  })
  .otherwise({
    redirectTo: '/'
  })
});