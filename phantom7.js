var page = require("webpage").create();

page.onLoadFinished = function(){
	console.log("ha terminado de cargar la pagina");
	page.render("otrabusquedaenamazon.png");
}

page.open("http://www.amazon.com/",  function(status){

	page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js",function(){
		
		page.evaluate(function(){
			$("#twotabsearchtextbox").val("books python");
			$("#nav-bar-inner form").submit();
		});
		
	});
	
});