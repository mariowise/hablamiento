
angular.module('controllers.about', [])

.controller('AboutCtrl', function ($scope, $state) {

	switch($state.current.name) {

		case "about":

			ajustWrapper('#show', 0)

		break;

	}

})