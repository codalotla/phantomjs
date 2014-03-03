var page = require("webpage").create();

var data = "field-keywords=grunt";

page.open("http://www.amazon.com/s/ref=nb_sb_noss_1", "POST", data, function(status){

	page.render("buscandoenamazon.png");

	phantom.exit();

/*	page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js",function(){
		
		
	});*/
	
});