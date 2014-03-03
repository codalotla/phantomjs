var page = require("webpage").create();

var system = require("system");

var tiempo = Date.now();

page.open(system.args[1], function(status){
	tiempo  = Date.now() - tiempo;
	console.log("La pagina ha tardado en cargar " + tiempo + " milisegundos");
	phantom.exit();
});