var page = require("webpage").create();

var system = require("system");

page.open(system.args[1], function(status){
	var titulo = page.evaluate(function(){
		return document.title;
	});
	console.log(titulo);
	phantom.exit();
});