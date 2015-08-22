
angular.module('services.game', [])

.factory('Game', function () {
	
	var res = {}

	res.load = function () {
		res.questions = angular.copy(dbGame)
	}

	res.get = function () {
		var random = Number.random(0, res.questions.length-1)
		var aux = res.questions.splice(random, 1)
		
		return aux
	}

	window.Game = res

	return res

})