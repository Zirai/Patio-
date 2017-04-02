(function () {
  'use strict';

  // Users service used for communicating with the users REST endpoint
  angular
    .module('project.services')
    .factory('ProjectService', Service);

  Service.$inject = ['$resource'];

  function Service($resource) {
    var project = $resource('/api/project', {}, {
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
