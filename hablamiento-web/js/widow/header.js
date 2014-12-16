
function headerMenuClick(element) {

	var lista = $(element).parent().parent().children()
	
	$(lista).removeClass("active")

	$(element).parent().addClass("active")

}