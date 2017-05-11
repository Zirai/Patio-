var PatioWeb = angular.module('PatioWeb', []);

PatioWeb.controller('AppsController', ['$scope',' $http', '$location', '$routeParamsfunction', function($scope, $http, $location, $routeParams){
    $scope.getApps = function(){
        $http.get(api/appData).success(function(response){
            $scope.apps = response;
        });
    }

    $scope.toogle1 = true;
    $scope.toogle2 = true;
    $scope.toogle3 = true;
    $scope.toogle4 = true;
    $scope.toogle5 = true;
    $scope.toogle6 = true;



}]);    
