
angular.module('controllers.modismo', [])

.controller("modismo-index", function ($scope, $state, $stateParams, Modismo) {
	$scope.slangs = Modismo.all()

	$scope.cancel = function () {
		$scope.search = ''
		if( $(search).attr('data-open') == "true" ) {
			h = $('.list').height()
			$('.search').slideUp()
			$('.list').animate({ height: (h + 48) + 'px' })
			$(search).attr('data-open', 'false')
		}
	}

	$scope.openSearchBar = function () {
		search = $('.search')
		if( $(search).attr('data-open') == "false" ) {
			h = $('.list').height()
			$(search).slideDown()
			$('.list').animate({ height: (h - 48) + 'px' })
			$(search).attr('data-open', 'true')
		}
	}

	ajustWrapper('.list', 0)
})

.controller("modismo-show", function ($scope, $state, $stateParams, Modismo) {
	$scope.selected = Modismo.find(Number($stateParams.id))
	$scope.selected.next = Modismo.next(Number($stateParams.id))
	$scope.selected.prev = Modismo.prev(Number($stateParams.id))

	window.selected = $scope.selected

	ajustWrapper('#show', 0)
})