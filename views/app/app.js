angular.module('PatioWeb', ['ngRoute']).config(config);

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

