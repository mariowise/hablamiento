
angular.module('controllers.categoria', [])

.controller('categoria', function ($scope, $state, $stateParams, Modismo) {

})

.controller('categoria-show', function ($scope, $state, $stateParams, Modismo) {
	$scope.categoria = Categorias[$stateParams.name]
	$scope.categoriaUrl = $stateParams.name
	$scope.slangs = Modismo.where({ categoria: $stateParams.name })

	ajustWrapper('.list', 10)
})

.controller('categoria-slang', function ($scope, $state, $stateParams, Modismo) {
	$scope.categoria = Categorias[$stateParams.name]
	$scope.categoriaUrl = $stateParams.name
	$scope.selected = Modismo.find(Number($stateParams.id))

	ajustWrapper('#show', 10)
})