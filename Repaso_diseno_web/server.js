var http = require('http');
var url = require("url");

function initServer(route, handle) {
	function onRequest(request, response) {
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		//console.log("Peticion Recibida  " + pathname);
		console.log(request.url);

		request.setEncoding("utf8");

		/*request.addListener("data", function(dataIn){
			postData += dataIn;
			console.log("DATOS: " + postData + "///");
		});

		request.addListener("end", function(){
			route(handle, pathname, response, postData);
		});*/

		route(handle, pathname, response);
	}

	http.createServer(onRequest).listen(8000);

	console.log("Servidor Iniciado.");
}

exports.init = initServer;

/*var http = require('http');
var dt = require('./mymodule');

var fs = require("fs");
var url = require("url");

http.createServer(function (req, res) {
	var q = url.parse(req.url, true);
	var filename = "." + q.pathname;
	console.log(req.url);
	fs.readFile(filename, function(err, data) {
		if (err) {
	  		res.writeHead(404, {'Content-Type': 'text/html'});
	  		res.end("404 Not Found");
		}
		else {
			if (filename == "./estilos.css")
				res.writeHead(200, {'Content-Type': 'text/css'});
			else			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			res.end();
		}
	});
  //res.writeHead(200, {'Content-Type': 'text/html'});
  //res.write("The date and time are currently: " + dt.myDateTime());
  //res.write(req.url);
  //res.end();
}).listen(8080); 

*/

/*fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});*/ 

