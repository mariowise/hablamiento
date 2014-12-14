
angular.module('hablamiento', [
	'ui.router',
	'controllers.index',
	'controllers.welcome',
	'controllers.modismo',
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

	$urlRouterProvider.otherwise('/')

})