var page = require("webpage").create();

var system = require("system");

page.onConsoleMessage = function(mensaje){
	console.log(mensaje);
	page.evaluate()
}

page.open(system.args[1], function(status){
	page.evaluate(function(){
		document.body.style.background = "blue";
		console.log("Hola, soy un mensaje");
	});

	page.render("fondoazul.png");
	
	phantom.exit();
});