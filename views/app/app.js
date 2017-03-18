angular.module('PatioWeb', ['ngRoute'])
.config(config)
.controller('PatioController', PatioController );

function config($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl:'views/home.jade',
		controller: 'PatioController',
		controllerAs: 'vm'
	}).when('/', {
		templateUrl:'views/article.jade',
		controller: 'ArticleController',
		controllerAs: 'vm'
	});
}

function PatioController() {
	var vm =this;
	vm.title = 'Patio Web';

}