(function () {
  'use strict';

  // Users service used for communicating with the users REST endpoint
  angular
    .module('home.services')
    .factory('homeService', Service);

  Service.$inject = ['$resource'];

  function Service($resource) {
    var home= $resource('/api/home', {}, {
      update: {
        method: 'PUT'
      }
    });

    // angular.extend(Project, {
    //   //changePassword: function (passwordDetails) {
    //   // return this.updatePassword(passwordDetails).$promise;
    //    }
    // });
    return project;
  }

}());
