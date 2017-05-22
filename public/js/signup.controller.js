// var PatioWeb = angular.module('PatioWeb', []);

// PatioWeb.controller('SignupController', ['$scope',' $http', '$location', '$routeParamsfunction', function($scope, $http, $location, $routeParams){
//     $('#submit').click(function(){
//         alert('I am here');
//     });
//    var vm = this;

//     vm.register = function() {
//         var user = {
//             username:vm.username,
//             password: vm.password
//         };

//         if(!vm.username || !vm.password){
//             vm.error = 'Please add a username and password.';
//         }
//         else{
//             $http.post('/signup', user).then(function(result){
//                 console.log(result);
//                 vm.message = 'Successful signup, please login';
//                 vm.error = '';
//             }).catch(function(error){
//                 console.log(error);
//             });
//         }
//     }

//  }]);
