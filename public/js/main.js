var PatioWeb = angular.module('PatioWeb', ['ngRoute']);

PatioWeb.config(function($routeProvider) {
  $routeProvider.when('/home', {
    controller:'homeController',
    templateUrl: 'views/index.jade',
    controllerAs: 'vm'
  })
  .when('/article', {
    controller:'ArticleController',
    templateUrl: 'views/article.jade',
    controllerAs: 'vm'
  })
  .when('/apps', {
    controller:'AppsController',
    templateUrl: 'views/apps.jade',
    controllerAs: 'vm'
  })
  .otherwise({
    redirectTo: '/'
  })
});