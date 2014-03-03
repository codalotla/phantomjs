var page = require("webpage").create();

var system = require("system");


page.open(system.args[1], function(status){
	page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js",function(){
		
		page.evaluate(function(){
			$("body").css("background","red");
			$("#nav-cross-shop-links li a").css("font-size","38px");
		});

		page.render("fondorojo.png");
		phantom.exit();
	});
	
});