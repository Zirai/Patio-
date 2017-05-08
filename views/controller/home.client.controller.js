angular.module('PatioWeb').controller('homeController', homeController).controller('AppsController', AppsController).controller('ArticleController', ArticleController) 

function homeController(){
  var vm = this;
  vm.name = 'Patio Main';
}

function ArticleController(){
  var vm = this;
  vm.name = 'Article view';
}

function AppsController(){
  var vm = this;
  vm.name = 'Apps view';
}