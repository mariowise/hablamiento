
angular.module('hablamiento', [
	'ui.router',
	'controllers.index',
	'controllers.welcome',
	'controllers.modismo',
	'controllers.categoria',
	'services'
])

.config(function ($stateProvider, $urlRouterProvider) {

	$stateProvider

	.state('index', {
		url: '/',
		templateUrl: 'templates/index.html',
		controller: 'IndexCtrl'
	})

	.state('welcome', {
		url: '/welcome',
		templateUrl: 'templates/welcome/index.html',
		controller: 'WelcomeCtrl'
	})

	.state('modismo-index', {
		url: '/modismo',
		templateUrl: 'templates/modismo/index.html',
		controller: 'ModismoCtrl'
	})

	.state('modismo-show', {
		url: '/modismo/:id',
		templateUrl: 'templates/modismo/show.html',
		controller: 'ModismoCtrl'
	})

	.state('categoria', {
		url: '/categoria',
		templateUrl: 'templates/categoria/index.html',
		controller: 'CategoriaCtrl'
	})

	.state('categoria-show', {
		url: '/categoria/:name',
		templateUrl: 'templates/categoria/show.html',
		controller: 'CategoriaCtrl'
	})

	.state('categoria-slang', {
		url: '/categoria/:name/:id',
		templateUrl: 'templates/categoria/show-slang.html',
		controller: 'CategoriaCtrl'
	})

	$urlRouterProvider.otherwise('/')

})