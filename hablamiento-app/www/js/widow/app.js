
angular.module('hablamiento', [
	'ui.router',
	'controllers.index',
	'controllers.welcome',
	'controllers.modismo',
	'controllers.categoria',
	'controllers.about',
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

	// Modismo
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

	// Categoria
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

	// About
	.state('about', {
		url: '/about', 
		templateUrl: 'templates/about/index.html',
		controller: 'AboutCtrl'
	})

	$urlRouterProvider.otherwise('/')

})