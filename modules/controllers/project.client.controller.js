(function () {
  'use strict';

  angular
    .module('home')
    .controller('homeController', homeController);

  homeController.$inject = ['$scope', '$state'];

  function homeController($scope, $state) {
    var vm = this;
  };
}());
