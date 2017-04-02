angular.module('PatioWeb').controller('PatioController', PatioController);

function PatioController($http) {
    var vm = this;
    vm.title = 'Patio Web';
    $http.get('/views').then(function(response) {
        console.log(response);
    });
 
}