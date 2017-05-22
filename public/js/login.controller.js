// var PatioWeb = angular.module('PatioWeb', []);

// PatioWeb.controller('LoginController', function($scope, $http, $location, $routeParams){
//     var vm = this;

//     vm.login = function() {
//         var user = {
//             username:vm.username,
//             password: vm.password
//         };

//         if(!vm.username || !vm.password){
//             vm.error = 'Please add a username and password.';
//         }
//         else{
//             $http.post('/login', user).then(function(result){
//                 console.log(response);
//                 vm.message = 'Successful login';
//                 vm.error = '';
//             }).catch(function(error){
//                 console.log(error);
//             });
//         }
//     }
// });
