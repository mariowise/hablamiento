
function ajustWrapper(select, extra) {

	var board = $(window).height()
	var header = $('#header').height()
	var search = $('.search').height()
	var footer = $('#footer').height()
	var wanted = board - header - footer - search - 12 + extra;

	$(select).css('height', wanted + 'px')

	return wanted
}

$(window).resize(function () {
    ajustWrapper('.list', 0)
})

$(window).resize(function () {
    ajustWrapper('#show', 12)
})