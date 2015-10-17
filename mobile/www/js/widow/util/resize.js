
function ajustWrapper(select, extra) {

	var board = $('body')[0].offsetHeight
	var header = ($('#header')[0] || { offsetHeight: 0 }).offsetHeight
	var search = ($('.search')[0] || { offsetHeight: 0 }).offsetHeight
	var footer = ($('#footer')[0] || { offsetHeight: 0 }).offsetHeight
	var wanted = board - header - footer - search + extra;

	$(select).css('height', wanted + 'px')

	return wanted
}

$(window).resize(function () {
    ajustWrapper('.list', 0)
})

$(window).resize(function () {
    ajustWrapper('#show', 0)
})

function searchBar() {
	
}

Number.random = function (floor, roof) {
	return (Math.floor(Math.random() * (roof - floor + 1)) + floor)
}

// Entrega cuanto tiempo ha pasado desde un 'future'
Date.diff = function (future) {
	var diff = future - new Date().getTime()

	var hours = Math.floor(diff / (60 * 60 * 1000))
	diff = diff - hours * (60 * 60 * 1000)

	var minutes = Math.floor(diff / (60 * 1000))
	diff = diff - minutes * (60 * 1000)

	var seconds = Math.floor(diff / 1000)

	if(hours < 0) {
		hours = 0
		minutes = 0
		seconds = 0
	}

	return {
		hours: hours,
		minutes: minutes,
		seconds: seconds
	}
}

var t1 = new Date().getTime() + 50 * 1000

Date.diff_string = function (future) {
	var time = Date.diff(future)

	minutes = "" + time.minutes
	seconds = (time.seconds < 10) ? "0" + time.seconds : time.seconds

	return minutes + ":" + seconds
}

Date.watch = function (scope, espera) {
	var futuro = new Date().getTime() + espera * 1000

	function f () {
		var tiempoPasado = Date.diff(futuro)

		console.log(Date.diff_string(futuro))
		scope.timer = Date.diff_string(futuro)
		if(!scope.$$phase)
			scope.$apply()

		if(!(tiempoPasado.seconds == 0 && tiempoPasado.minutes == 0 && tiempoPasado.hours == 0)) {
			setTimeout(f, 400)
		} else {
			scope.endGame()
		}
	}

	f()
}
