angular.module('PatioWeb', ['ngRoute']).config(config);

function config($routeProvider) {
  $routeProvider.when('/', {
    controller:'homeController',
    templateUrl: 'views/index.jade',
    controllerAs: 'vm'
  })
  // .when('/home', {
  //   controller:'homeController',
  //   templateUrl: 'views/index.jade'
  // })
  .when('/articles', {
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
  });
};