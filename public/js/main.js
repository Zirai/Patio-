var PatioWeb = angular.module('PatioWeb', ['ngRoute', 'ngResource', 'ngSanitize']);

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
  .when('/login', {
    controller:'LoginController',
    templateUrl: 'views/login.jade',
    controllerAs: 'vm'
  })
  .when('/signup', {
    controller:'SignupController',
    templateUrl: 'views/signup.jade',
    controllerAs: 'vm'
  })
  .otherwise({
    redirectTo: '/'
  })
});