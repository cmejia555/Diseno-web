var http = require('http');
var url = require("url");

function initServer(route, handle) {
	function onRequest(request, response) {
		var postData = "";
		var pathname = url.parse(request.url).pathname;

		console.log(request.url);

		if( request.method == "GET") {
			route(handle, pathname, response); // Las paginas se ingresan por GET
		}		
		if( request.method == "POST") { // Solo el formulario ingresa por POST
			request.setEncoding("utf8");

			request.addListener("data", function(dataIn){
				postData += dataIn;
				console.log("DATOS: " + postData + "///");
			});

			request.addListener("end", function(){
				route(handle, pathname, response, postData);
			});
		}
	}

	http.createServer(onRequest).listen(8000);

	console.log("Servidor Iniciado.");
}

exports.init = initServer;
