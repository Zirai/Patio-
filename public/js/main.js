var PatioWeb = angular.module('PatioWeb', ['ngRoute']);

PatioWeb.config(function($routeProvider) {
  $routeProvider.when('/home', {
    controller:'homeController',
    templateUrl: 'views/index.jade',
    controllerAs: 'vm'
  })
  .when('/Article', {
    controller:'ArticleController',
    templateUrl: 'views/article.jade',
    controllerAs: 'vm'
  })
  .when('/Apps', {
    controller:'AppsController',
    templateUrl: 'views/apps.jade',
    controllerAs: 'vm'
  })
  .otherwise({
    redirectTo: '/'
  })
});