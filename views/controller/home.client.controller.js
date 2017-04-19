var PatioWeb = angular.module('PatioWeb');

PatioWeb.controller('homeController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
  console.log('home loaded')
  $scope.getHome = function(){
    $http.get('/api/home').success(function(response){
      $scope.home= response;
    });
  }
}]);
