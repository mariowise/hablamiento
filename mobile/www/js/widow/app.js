
angular.module('hablamiento', [
	'ui.router',
	'controllers.index',
	'controllers.welcome',
	'controllers.modismo',
	'controllers.categoria',
	'controllers.game',
	'controllers.about',
	'services.modismo',
	'services.game'
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
		controller: 'modismo-index'
	})

	.state('modismo-show', {
		url: '/modismo/:id',
		templateUrl: 'templates/modismo/show.html',
		controller: 'modismo-show'
	})

	// Categoria
	.state('categoria', {
		url: '/categoria',
		templateUrl: 'templates/categoria/index.html',
		controller: 'categoria'
	})

	.state('categoria-show', {
		url: '/categoria/:name',
		templateUrl: 'templates/categoria/show.html',
		controller: 'categoria-show'
	})

	.state('categoria-slang', {
		url: '/categoria/:name/:id',
		templateUrl: 'templates/categoria/show-slang.html',
		controller: 'categoria-slang'
	})

	// Game
	.state('game', {
		url: '/game',
		templateUrl: 'templates/game/index.html',
		controller: 'game'
	})

	.state('game-info', {
		url: '/game/info',
		templateUrl: 'templates/game/info.html',
		controller: 'game-info'
	})

	.state('game-match', {
		url: '/game/match/:steps/:timelimit',
		templateUrl: 'templates/game/match.html',
		controller: 'game-match'
	})

	.state('game-end', {
		url: '/game/end/:correctas',
		templateUrl: 'templates/game/end.html',
		controller: 'game-end'
	})

	// About
	.state('about', {
		url: '/about', 
		templateUrl: 'templates/about/index.html',
		controller: 'AboutCtrl'
	})

	$urlRouterProvider.otherwise('/modismo')

})