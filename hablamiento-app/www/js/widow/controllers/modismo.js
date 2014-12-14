
angular.module('controllers.modismo', [])

.controller('ModismoCtrl', function ($scope, $state, $stateParams, Modismo) {

	switch($state.current.name) {

		case "modismo-index":

			$scope.slangs = Modismo.all()

			$scope.cancel = function () {
				$scope.search = ''
			}

			ajustWrapper('.list', 0)

		break;

		case "modismo-show":

			$scope.selected = Modismo.find(Number($stateParams.id))
			$scope.selected.next = Modismo.next(Number($stateParams.id))
			$scope.selected.prev = Modismo.prev(Number($stateParams.id))

			window.selected = $scope.selected

			ajustWrapper('#show', 12)

		break;

	}

})