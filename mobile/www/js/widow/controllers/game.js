
angular.module('controllers.game', [])

.controller('game', function ($scope, $state, $stateParams, Game) {
	ajustWrapper('#show', 12)
})

.controller('game-info', function ($scope, $state, $stateParams, Game) {
	ajustWrapper('#show', 12)
})

.controller('game-match', function ($scope, $state, $stateParams, Game) {
	Game.load()
	$scope.correctas = 0
	$scope.question = Game.get()[0]

	Date.watch($scope, Number($stateParams.timelimit))

	$scope.answare = function (right) {
		$scope.question = Game.get()[0]
		
		if(right)
			$scope.correctas += 1

		if($scope.question == undefined) {
			console.log("Juego terminado")
			console.log("Preguntas: " + $stateParams.steps)	
			console.log("Tiempo: " + $stateParams.timelimit)
			console.log("Correctas: " + $scope.correctas)	
		}
	}

	$scope.endGame = function () {
		console.log("Juego terminado")
		console.log("Preguntas: " + $stateParams.steps)	
		console.log("Tiempo: " + $stateParams.timelimit)
		console.log("Correctas: " + $scope.correctas)

		window.steps = $stateParams.steps
		window.timelimit = $stateParams.timelimit
		window.correctas = $scope.correctas

		$state.go('game-end', { correctas: $scope.correctas })
	}

	ajustWrapper('#show', 12)
})

.controller('game-end', function ($scope, $state, $stateParams, Game) {
	ajustWrapper('#show', 12)

	$scope.correctas = $stateParams.correctas
})
