
angular.module('controllers.game', [])

.controller('GameCtrl', function ($scope, $state) {

	switch($state.current.name) {

		case "game":

			ajustWrapper('#show', 12)

		break;

		case "game-info":

			ajustWrapper('#show', 12)

		break;

	}

})