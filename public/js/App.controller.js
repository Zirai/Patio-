var PatioWeb = angular.module('PatioWeb', []);

PatioWeb.controller('AppsController', ['$scope',' $http', '$location', '$routeParamsfunction', function($scope, $http, $location, $routeParams){
    console.log('Appscontrller lodaead ....')

    $scope.getApps = function(){
        $http.get(api/appData).success(function(response){
            $scope.apps = response;
        });
    }
}]);
