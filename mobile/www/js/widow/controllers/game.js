
angular.module('controllers.game', [])

.controller('GameCtrl', function ($scope, $state, $stateParams, Game) {

	switch($state.current.name) {

		case "game":

			ajustWrapper('#show', 12)

		break;

		case "game-info":

			ajustWrapper('#show', 12)

		break;

		case "game-match":

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

				$state.go('game-end')
			}

			ajustWrapper('#show', 12)

		break;

		case "game-end":

			$scope.steps = window.steps
			$scope.timelimit = window.timelimit
			$scope.correctas = window.correctas

		break;

	}

})