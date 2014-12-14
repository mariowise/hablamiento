
angular.module('controllers.index', [])

.controller('IndexCtrl', function ($scope, $state) {
	console.log("Ejecutando IndexCtrl")

	setTimeout(function () {
		$state.go('modismo-index')
	}, 2000)

})