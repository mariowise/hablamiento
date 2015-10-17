angular.module('services.modismo', [])

.factory('Modismo', function () {
	var res = {}

	
	res.all = function () {
		return dbModismos
	}

	res.find = function (id) {
		return _.find(dbModismos, function (item) {
			return id === item.id
		})
	}

	res.prev = function (id) {
		var index = undefined
		_.each(dbModismos, function (value, key) {
			if(value.id === id)
				index = key
		})
		if(index != undefined && index > 0)
			return index -1
		else
			return -1
	}

	res.next = function (id) {
		var index = undefined
		_.each(dbModismos, function (value, key) {
			if(value.id === id)
				index = key
		})
		if(index != undefined && index < (dbModismos.length-1))
			return index +1
		else 
			return -1
	}

	res.where = function (query) {
		var group = []
		_.each(dbModismos, function (value, key) {
			
			var flag = true
			_.each(query, function (filter, index) {
				if(value[index] != filter)
					flag = false
			})

			if(flag)
				group.push(value)

		})
		return group
	}

	res.by_categoria = function (query) {
		var group = []
		_.each(dbModismos, function (value, key) {

			if( value.categoria.indexOf(query) != -1 )
				group.push(value)
				
			
		})
		return group
	}

	window.Modismo = res

	return res
})
