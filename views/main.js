var PatioWeb = angular.module('PatioWeb', ['ngRoute']);

PatioWeb.config(function($routeProvider){
  $routeProvider.when('/', {
    controller:'homeController',
    templateUrl: 'views/index.jade'
  })
  .when('/home', {
    controller:'homeController',
    templateUrl: 'views/index.jade'
  })
  .when('/home/articles/:articleID', {
    controller:'homeController',
    templateUrl: 'views/article.jade'
  })
  .when('/home/apps/:appsID', {
    controller:'homeController',
    templateUrl: 'views/apps.jade'
  })
  .otherwise({
    redirectTo: '/'
  });
});