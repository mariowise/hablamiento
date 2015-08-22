
angular.module('controllers.categoria', [])

.controller('CategoriaCtrl', function ($scope, $state, $stateParams, Modismo) {

	switch($state.current.name) {

		case "categoria":

			

		break;

		case "categoria-show":

			$scope.categoria = Categorias[$stateParams.name]
			$scope.categoriaUrl = $stateParams.name
			$scope.slangs = Modismo.where({ categoria: $stateParams.name })

			ajustWrapper('.list', 10)

		break;

		case "categoria-slang":

			$scope.categoria = Categorias[$stateParams.name]
			$scope.categoriaUrl = $stateParams.name
			$scope.selected = Modismo.find(Number($stateParams.id))

			ajustWrapper('#show', 10)

		break;

	}

})