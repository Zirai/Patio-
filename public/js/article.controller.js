var PatioWeb = angular.module('PatioWeb', []);

PatioWeb.controller('ArticleController', ['$scope',' $http', '$location', '$routeParamsfunction', function($scope, $http, $location, $routeParams){
    console.log('Articlecontrller lodaead ....')

    $scope.getAricle = function(){
        $http.get(api/articleData).success(function(response){
            $scope.article = response;
        });
    }
}]);